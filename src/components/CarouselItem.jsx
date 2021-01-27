import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/baseline_play_arrow_white_18dp.png';
import starIcon from '../assets/static/baseline_grade_white_18dp.png';

const CarouselItem = ({cover, title, year, contentRating, duration}) => (

    <div className="carousel-item">
        <img className="carousel-item__img"
            src={cover}
            alt={title}/>
        <div className="carousel-item__details">
            <div>
                <img src={playIcon} alt="Play" />
                <img src={starIcon} alt="Star" />
            </div>

            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

export default CarouselItem;


