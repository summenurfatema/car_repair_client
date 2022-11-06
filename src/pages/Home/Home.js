import React from 'react';
import About from '../About/About';
import Carousal from './Carousal/Carousal';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Carousal></Carousal>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;