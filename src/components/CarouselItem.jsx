import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (

    <div className="carousel-item">
        <img className="carousel-item__img"
            src="https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Fresas"/>
        <div className="carousel-item__details">
            <div>
                <img src="./img/baseline_play_arrow_white_18dp.png" alt="Play" />
                <img src="./img/baseline_grade_white_18dp.png" alt="Star" />
            </div>

            <p className="carousel-item__details--title">Fresas</p>
            <p className="carousel-item__details--subtitle">Frutas</p>
        </div>
    </div>
);

export default CarouselItem;


