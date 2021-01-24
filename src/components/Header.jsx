import React from 'react';

const Header = () => (
    <header className="header">
        <img className="header__img" src="./img/logo-foodhy.png" alt="Imagen page" />

        <div className="header__nav">
            <div className="header__nav--profile">
                <img src="./img/user-icon.png" alt="Imagen de Perfil" />
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
