import React,{ useState , useEffect } from 'react';
import Newscard from './Newscard';
import { useParams } from 'react-router-dom';

function Sourcenews(props){
    const [headlines, setHeadlines] = useState([]);
    const key = useParams();
    console.log('props')
    console.log(key)
    let serachWord = key.key === undefined ? `sources=${props.source}` : `q=${key.key}`
    //const data = props.match.params.param;
    useEffect(() => {
        console.log(serachWord)
        fetch(`https://newsapi.org/v2/top-headlines?${serachWord}&apiKey=bb5b1c906cb34c1d90fe13b072449dee`).then(res => {
            console.log('called')
            return res.json()
        }).then(ans => {
            console.log(ans)
            setHeadlines(ans.articles.map((item, index) => {
                    return <Newscard key={index} heading={item.title} imageUrl={item.urlToImage} content={item.description} />
            }))
        }).catch(err => {
            throw err
        })
    }, [props.source,serachWord])
    return (
        <React.Fragment>
            {headlines}
        </React.Fragment>
    )
}

export default Sourcenews;
