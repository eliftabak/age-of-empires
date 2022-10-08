import React from 'react';
import './index.scss';
import ageOfEmpiresBanner from '../../assets/img/age-of-empires-banner.jpeg';

function Home() {
  return (
    <div className='home'>
      <div className='home__bannerContainer'>
        <img src={ageOfEmpiresBanner} alt="age-of-empires-banner"/>
      </div>
    </div>
  );
}

export default Home;