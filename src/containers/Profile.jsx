import React from 'react';
import Header from '../components/Header';
import gravatar from '../utils/gravatar';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';

const Profile = props => {

    const { user } = props;

    return (
        <>
            <Header />
            <section className="container-row">

            <div className="container-image">
                <img src={gravatar(user.email)} className="photo-perfil" alt="imagenDePerfil" />
            </div>
            
            <div className="container-perfil">
                <div className="text-perfil-name">
                    <h3>@Alias</h3>
                    <h5>Nombre completo</h5>
                </div>
                <p>Descripcion</p>
                <h6>contacto</h6>
            </div>
            </section>
        </>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, null) (Profile);