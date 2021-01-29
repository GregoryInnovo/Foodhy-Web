import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/baseline_play_arrow_white_18dp.png';
import starIcon from '../assets/static/baseline_grade_white_18dp.png';
import removeIcon from '../assets/static/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png';

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isList} = props;
    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handleDeleteFavorite = (itemId) =>{
        props.deleteFavorite(itemId)
    }
    return (

    <div className="carousel-item">
        <img className="carousel-item__img"
            src={cover}
            alt={title}/>
        <div className="carousel-item__details">
            <div>
                <Link to={`/player/${id}`}>
                    <img 
                        className="" 
                        src={playIcon} 
                        alt="Play" 
                    />
                </Link>

                {isList ?
                    <img className="" src={removeIcon} alt="Remove" onClick={() => handleDeleteFavorite(id)}/>
                    :
                    <img className="" src={starIcon} alt="Star" onClick={handleSetFavorite}/>
                }
            </div>

            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
)};

CarouselItem.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps) (CarouselItem);


