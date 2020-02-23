import React from 'react';
import CarouselImage from './Carouselimage';
import CarouselMove from './Carouselmove';

function Carousel(props) {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <CarouselImage region={props.region} />
            <CarouselMove />
        </div>
    )
}
export default Carousel;