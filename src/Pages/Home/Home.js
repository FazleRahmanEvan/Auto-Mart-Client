import React from 'react';
import Footer from '../Shared/Footer';
import AboutAutomart from './AboutAutomart';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary.js';
import ConntactUs from './ContactUs';

import OurProducts from './OurProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurProducts></OurProducts>
            <AboutAutomart></AboutAutomart>
            <ConntactUs></ConntactUs>
            <BusinessSummary></BusinessSummary>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;