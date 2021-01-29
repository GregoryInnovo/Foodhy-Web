import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-foodhy.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
    
    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    return(
        <header className="header">
            
            <Link to="/">
                <img className="header__img" src={logo} alt="Imagen page" />
            </Link>

            <div className="header__nav">
                <div className="header__nav--profile">
                {hasUser ?
                    <img src={gravatar(user.email)} alt={user.email} />
                    :
                    <img src={userIcon} alt="Imagen de Perfil" />
            

                }
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/#">Cuenta</a></li>
                    <li>
                        <Link to="/login">
                            Iniciar Sesión
                        </Link>
                    </li>
                </ul>
                
            </div>

        </header>
    )};
const mapStateToProps = state => {
    return {
        user: state.user,
    }
}
export default connect(mapStateToProps, null) (Header);
