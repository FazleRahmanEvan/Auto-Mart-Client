import React from 'react';
import Footer from '../Shared/Footer';
import AboutAutomart from './AboutAutomart';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary.js';
import ConntactUs from './ContactUs';

import OurProducts from './OurProducts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurProducts></OurProducts>
            <AboutAutomart></AboutAutomart>
            <Reviews></Reviews>
            <ConntactUs></ConntactUs>
            <BusinessSummary></BusinessSummary>
         
        </div>
    );
};

export default Home;