import React from 'react';
import   '../Home/Home.css';
import Services from '../Services/Services';
import Navigation from '../Share/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;