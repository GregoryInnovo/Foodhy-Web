import React, { Fragment } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => (
    <div className="App">
        <Header />
        <Search />

        <Categories title="Frutas">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Nuevos">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Próximamente">
            <Carousel>
                <CarouselItem />
            </Carousel>
        </Categories>

        <Footer />
    </div>
);

export default App;