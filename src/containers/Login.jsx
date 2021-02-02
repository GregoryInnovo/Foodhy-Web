import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions'
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-g-icon-9.jpg';
import TwitterIcon from '../assets/static/Twitter_logo_white.png';

const Login = (props) => {
    
    const [form, setValues] = useState({
       email: '', 
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <Fragment>
            <Header isLogin />
            <section className="login">
                <section className="login__container">
                    <h2>Inicia Sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input 
                            name="email" 
                            className="input__login" 
                            type="text" 
                            placeholder="Correo" 
                            onChange={handleInput}
                            />
                        <input 
                            name="password" 
                            className="input__login" 
                            type="password" 
                            placeholder="Contraseña" 
                            onChange={handleInput}
                        />
                        <button className="button" type='submit'>Iniciar sesión</button>
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
                        ¿No tienes ninguna cuenta? {''}
                        <Link to="/register">
                            Regístrate
                        </Link>
                    </p>
                </section>
            </section>
        </Fragment>
)};
const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps) (Login);