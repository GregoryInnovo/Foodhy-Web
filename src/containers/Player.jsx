import React from 'react';
import '../assets/styles/components/Player.scss';
import { Link } from 'react-router-dom';
const Player = () => {
    return (
        <div className="Player">
            <video controls autoplay>
                <source src="" type="video/mp4"/>
            </video>
            <div className="Player-back">
                <Link to="/">
                    <button type="button"> 
                        Regresar
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Player;
