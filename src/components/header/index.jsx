import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={logo} alt='age-of-empires-logo' />
      </div>
      <div className='header__navLinks'>
        <Link className='header__navLinks-item' to='/'>Home</Link>
        <Link className='header__navLinks-item' to='/units'>Units</Link>
      </div>
    </div>
  );
}

export default Header;