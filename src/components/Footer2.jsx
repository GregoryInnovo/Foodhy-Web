import React from 'react';
import { Link } from 'react-router-dom';

const Footer2 = () => {

    return (
        <nav className="nav">
            <a href="" className="nav__link">
                <i className="material-icons nav__icon">dashboard</i>
                <span className="nav__text">Principal</span>
            </a>
            <a href="" className="nav__link">
                <i className="material-icons nav__icon">image_search</i>
                <span className="nav__text">Buscador</span>
            </a>
            <a href="" className="nav__link">
                <i className="material-icons nav__icon">camera</i>
                <span className="nav__text">Escáner</span>
            </a>

            <Link to="/register" className="nav__link">
                <i className="material-icons nav__icon">person</i>
                <span className="nav__text">Perfil</span>
            </Link>
            
        </nav>
    )
};

export default Footer2;