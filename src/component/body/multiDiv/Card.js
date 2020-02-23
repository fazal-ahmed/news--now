import React from 'react';

function Card(props){
    const style = {
        width : "17rem",
        fontWeight:"lighter"
    }
    console.log(props)
    return(
        <div className={props.cal === undefined ? `card`: `card ${props.cal.className}`} style={props.cal === undefined ? {marginTop : '15px', height:'100%',fontSize:"30px",fontWeight:"lighter"} : style} >
                <img class="card-img-top" src={props.imageUrl} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title" style={props.cal === undefined ? {fontSize:"50px"}:{}}>{props.heading}</h5>
                    <p class="card-text" tyle={props.cal != undefined ? {fontSize:"50px"}:{}}>{props.content}</p>
                </div>
            </div>
    )
}
export default Card;