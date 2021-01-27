import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
    <section className="login">
        <section className="login__container">
            <h2>Regístrate</h2>
            <form className="login__container--form">
                <input className="input__login" type="text" placeholder="Nombre" />
                <input className="input__login" type="password" placeholder="Correo" />
                <input className="input__login" type="password" placeholder="Contraseña" />
                <button className="button">Registrarme</button>
            </form>
            <p className="login__container--register-enter">
                <Link to="/login">
                    Iniciar Sesión
                </Link>
            </p>
        </section>
    </section>
);

export default Register;