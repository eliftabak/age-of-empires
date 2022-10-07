import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import ageOfEmpiresBanner from '../../assets/img/age-of-empires-poster.jpeg';

function Home() {
  return (
    <div className='home'>
      <div className="home__header">
        <h1>Home Page</h1>
        <div className='home__navLinks'>
          <Link to="/">Home</Link>
          <Link to="/units">Units</Link>
        </div>
      </div>
      <div className='home__bannerContainer'>
        <img src={ageOfEmpiresBanner} alt="age-of-empires-banner"/>
      </div>
    </div>
  );
}

export default Home;