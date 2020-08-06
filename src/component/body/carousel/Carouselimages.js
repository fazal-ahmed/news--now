import React from 'react';

function CarouselImages(props) {
    return (
        <div className={props.active ? "carousel-item active":"carousel-item"}>
            <img className="d-block w-100" src={props.imageUrl} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
            <h4 className="head">{props.heading}</h4>    
            </div>
        </div>
    )
}
export default CarouselImages;