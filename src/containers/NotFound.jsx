import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <>
        <section className="container__error">
            <section className="container__error--details">
                <h2>Error 404</h2>
                <p>Página no encontrada</p>
            </section>
        </section>
    </>
);

export default NotFound;