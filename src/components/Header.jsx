import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-foodhy.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="Imagen page" />

        <div className="header__nav">
            <div className="header__nav--profile">
                <img src={userIcon} alt="Imagen de Perfil" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/#">Cuenta</a></li>
                <li><a href="/#">Cerrar Sesión</a></li>
            </ul>
        </div>

    </header>
);

export default Header;
