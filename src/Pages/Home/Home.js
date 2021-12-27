import React from 'react';
import   '../Home/Home.css';
import Services from '../Services/Services';
import Navigation from '../Share/Navigation/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
        </div>
    );
};

export default Home;