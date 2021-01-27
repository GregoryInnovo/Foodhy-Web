import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
    const initialState = useInitialState(API);
    
    for (const e in initialState.trends.type)
        console.log(e);

    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <>
            <Search />

{/*             {initialState.mylist.length > 0 && 
                <Categories title="Frutas">
                    <Carousel>
                        {initialState.mylist.map(item => {
                            <CarouselItem key={item.id} {...item} />   
                        })}
                    </Carousel>
                </Categories>
            }

            <Categories title="Nuevos">
                <Carousel>
                    {initialState.trends.map(item => (
                        <CarouselItem key={item.id} {...item}/>
                    ))}
                </Carousel>
            </Categories>

            <Categories title="Próximamente">
                <Carousel>
                    {initialState.originals.map(item => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories> */}


            {

            }

            {initialState.mylist.length > 0 && 
                <Categories title="Frutas">
                    <Carousel>
                        {initialState.mylist.map(item => {
                            <CarouselItem key={item.id} {...item} />   
                        })}
                    </Carousel>
                </Categories>
            }

            <Categories title="Nuevos">
                <Carousel>
                    {initialState.trends.map(item => (
                        <CarouselItem key={item.id} {...item}/>
                    ))}
                </Carousel>
            </Categories>

            <Categories title="Próximamente">
                <Carousel>
                    {initialState.originals.map(item => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories>
        </>
    );
}
export default Home;