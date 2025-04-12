import React from 'react';
import Carousel from '../component/Carousel';
import TabCategories from '../component/TabCategories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <Carousel/>
            <TabCategories />
        </div>
    );
};

export default Home;