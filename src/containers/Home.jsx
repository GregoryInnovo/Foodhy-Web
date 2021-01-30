import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {    
    return (
        <>
{/*             <Search />
            {myList.length > 0 && (
                <Categories title="Frutas">
                    <Carousel>
                        {myList.map((item) => {
                            <CarouselItem key={`${item.id}_myList`} {...item} />   
                        })}
                    </Carousel>
                </Categories>
            )}

            <Categories title="Nuevos">
                <Carousel>
                    {trends.map((item) => (
                        <CarouselItem key={`${item.id}_trends`} {...item}/>
                    ))}
                </Carousel>
            </Categories>

            <Categories title="Próximamente">
                <Carousel>
                    {originals.map((item) => (
                        <CarouselItem key={`${item.id}_originals`} {...item} />
                    ))}
                </Carousel>
            </Categories>
 */}
            <Header />
            <Search />
			{myList.length > 0 && (
				<Categories title='Mi Lista'>
					<Carousel>
						{myList.map((item) => (
                            <CarouselItem 
                            key={`${item.id}_myList`} 
                            {...item} 
                            isList
                        />
						))}
					</Carousel>
				</Categories>
			)}
			<Categories title='Nuevos'>
				<Carousel>
					{trends.map((item) => (
						<CarouselItem key={`${item.id}_trends`} {...item} />
					))}
				</Carousel>
			</Categories>
			<Categories title='Próximamente'>
				<Carousel>
					{originals.map((item) => (
						<CarouselItem key={`${item.id}_originals`} {...item} />
					))}
				</Carousel>
			</Categories>
        </>
    );
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    }
};
export default connect(mapStateToProps, null) (Home);