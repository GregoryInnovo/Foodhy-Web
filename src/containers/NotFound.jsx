import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <>
        <Header />
        <section className="container__error">
            <section className="container__error--details">
                <h2>Error 404</h2>
                <p>Página no encontrada</p>
            </section>
        </section>
        <Footer />
    </>
);

export default NotFound;