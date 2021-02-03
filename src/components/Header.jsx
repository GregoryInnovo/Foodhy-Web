import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import PropTypes, { string } from 'prop-types';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-foodhy.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
    const { user, isLogin, isRegister } = props;
    const hasUser = Object.keys(user).length > 0;
    
    const handleLogout = () => {
        // Reinicio el estado
        props.logoutRequest({})
    };

    const headerClass = classNames('header', {
        isLogin, 
        isRegister,
    });

    return(
        <header className={headerClass}>
            
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

                    {hasUser ? 
                        // <li><a href="/#">{user.name}</a></li>
                        <li>
                            <Link to="/profile">
                                Profile
                            </Link>
                        </li>
                        : null
                    }

                    {hasUser ? 
                        <li>
                            <Link to="/login" onClick={handleLogout}>Cerrar Sesión</Link>
                        </li>
                        :
                        <li>
                            <Link to="/login">
                                Iniciar Sesión
                            </Link>
                        </li>    
                    }
                </ul>
                
            </div>

        </header>
    )};

Header.propTypes = {
    user: PropTypes.object.isRequired,
    logoutRequest: PropTypes.func.isRequired,
    isLogin: PropTypes.any,
    isRegister: PropTypes.any,
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);
