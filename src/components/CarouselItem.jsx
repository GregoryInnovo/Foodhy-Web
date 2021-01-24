import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/baseline_play_arrow_white_18dp.png';
import starIcon from '../assets/static/baseline_grade_white_18dp.png';

const CarouselItem = () => (

    <div className="carousel-item">
        <img className="carousel-item__img"
            src="https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Fresas"/>
        <div className="carousel-item__details">
            <div>
                <img src={playIcon} alt="Play" />
                <img src={starIcon} alt="Star" />
            </div>

            <p className="carousel-item__details--title">Fresas</p>
            <p className="carousel-item__details--subtitle">Frutas</p>
        </div>
    </div>
);

export default CarouselItem;


