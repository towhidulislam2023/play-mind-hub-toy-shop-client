import React from 'react';
import useTitle from '../../../hooks/useTitle';
import HomeBannar from '../HomeBannar/HomeBannar';
import Gallery from '../Gallery/Gallery';
import ShopByCatagory from '../ShopByCatagory/ShopByCatagory';
import Services from '../Services/Services';
import About from '../../About/About';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <HomeBannar></HomeBannar>
            <About></About>
            <Gallery></Gallery>
            <ShopByCatagory></ShopByCatagory>
            <Services></Services>
        </div>
    );
};

export default Home;