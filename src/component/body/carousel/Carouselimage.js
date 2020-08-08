import React, { useState, useEffect } from 'react';
import CarouselImages from './Carouselimages';

function CarouselImage(props) {
    console.log('new data')
    console.log(props)
    const [headlines, setHeadlines] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.region}&apiKey=bb5b1c906cb34c1d90fe13b072449dee`).then(res => {
            console.log('called')
            return res.json()
        }).then(ans => {
            console.log(ans)
            setHeadlines(ans.articles.map((item, index) => {
                if (index === 0)
                    return <CarouselImages key={index} active={true} heading={item.title} imageUrl={item.urlToImage} />
                return <CarouselImages key={index} heading={item.title} imageUrl={item.urlToImage} />
            }))
        }).catch(err => {
            throw err
        })
    }, [props.region])
    return (
        <div class="carousel-inner">
            {headlines}
        </div >
    )
}

export default CarouselImage;