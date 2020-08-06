import React, { useState, useEffect } from 'react';
import Card from './Card';

function Cardgroup(props) {
    console.log(props)
    const cls = { className: 'mt-3 cs' }
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.region}&category=${props.catagory}&apiKey=1c94bdc466f046f58da50d5890ed9796`).then(res => {
            return res.json()
        }).then(ans => {
            console.log('called')
            console.log(ans)
            setCard(ans.articles.map((item, index) => {
                if (index <= 7)
                    return index === 0 ? <div className="col col-md-6 col-sm-12"><Card key={index} heading={item.title} imageUrl={item.urlToImage} content={item.description} /></div> : <div className="col col-md-6 col-sm-12 ml-5"><Card cal={cls} key={index} heading={item.title} imageUrl={item.urlToImage} content={item.description} /></div>
            }).filter(item => item))
        }).catch(err => {
            throw err
        })
    }, [props.region])

    return (
        <React.Fragment>
            <h1 className="news">{props.name}</h1><br/>
            <div class="row">
                {card[0]}
                <div className="col col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-md-6 ">
                            {card[1]}
                            {card[2]}
                        </div>
                        <div className="col-md-6 ">
                            {card[3]}
                            {card[4]}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cardgroup;