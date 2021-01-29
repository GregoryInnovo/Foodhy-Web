import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => {
    
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
    }
    return(
        <section className="login">
            <section className="login__container">
                <h2>Regístrate</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input 
                        className="input__login" 
                        name="name"  type="text" 
                        placeholder="Nombre" 
                        onChange={handleInput}/>

                    <input 
                        className="input__login" 
                        name="email" type="email" 
                        placeholder="Correo" 
                        onChange={handleInput}/>
                        
                    <input 
                        className="input__login" 
                        name="password" type="password" 
                        placeholder="Contraseña" 
                        onChange={handleInput}/>

                    <button className="button" type="submit">Registrarme</button>
                </form>
                <p className="login__container--register-enter">
                    <Link to="/login">
                        Iniciar Sesión
                    </Link>
                </p>
            </section>
        </section>
)};

export default Register;