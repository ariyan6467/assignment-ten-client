import React from 'react';
import Navbar from '../Component/Navbar';
import Banner from '../Component/Banner';
import HomeAi from '../Component/HomeAi';
import AboutAi from '../Component/AboutAi';
import Register from '../Component/Register';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
         
         
          <Banner></Banner>
          <HomeAi></HomeAi>
          <AboutAi></AboutAi>
          <Register></Register>
         
        </div>
    );
};

export default Home;