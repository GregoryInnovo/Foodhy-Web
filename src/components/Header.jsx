import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-foodhy.png';
import userIcon from '../assets/static/user-icon.png';

const Header = ({ user }) => (
    <header className="header">
        
        <Link to="/">
            <img className="header__img" src={logo} alt="Imagen page" />
        </Link>

        <div className="header__nav">
            <div className="header__nav--profile">
                <img src={userIcon} alt="Imagen de Perfil" />
                <p>Perfil</p>
            </div>
            {user.email !== undefined ?
            <ul>
                <li><a>{user.email}</a></li>
                <li>
                    <Link to="/register">
                        Mi perfil
                    </Link>
                </li>
            </ul>
            :
            <ul>
                <li><a href="/#">Cuenta</a></li>
                <li>
                    <Link to="/login">
                        Iniciar Sesión
                    </Link>
                </li>
            </ul>
            }
        </div>

    </header>
);
const mapStateToProps = state => {
    return {
        user: state.user,
    }
}
export default connect(mapStateToProps, null) (Header);
