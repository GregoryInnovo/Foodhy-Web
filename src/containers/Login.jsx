import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-g-icon-9.jpg';
import TwitterIcon from '../assets/static/Twitter_logo_white.png';

const Login = () => (
    <Fragment>
    <section className="login">
        <section className="login__container">
            <h2>Inicia Sesión</h2>
            <form className="login__container--form">
                <input aria-label="Correo" className="input__login" type="text" placeholder="Correo" />
                <input aria-label="Contraseña" className="input__login" type="password" placeholder="Contraseña" />
                <button className="button">Iniciar sesión</button>
                <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" id="cbox1" value="checkbox" />Recuérdame
                    </label>
                    <a href="#">Olvidé mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={googleIcon} alt="Google" />Inicia sesión con Google</div>
                <div><img src={TwitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">
                No tienes nunguna cuenta
                <br/> 
                <Link to="/register">
                    Regístrate
                </Link>
            </p>
        </section>
    </section>
    </Fragment>
);

export default Login;