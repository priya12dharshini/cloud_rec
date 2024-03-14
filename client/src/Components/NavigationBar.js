import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'

const NavigationBar = () => {
  return (
    <nav className='navCenter'>
      <ul className='navList'>
        <li className='navItem'>
          <Link to="/"><b>Home</b></Link>
        </li>
        <li className='navItem'>
          <Link to="/register"><b>Register</b></Link>
        </li>
        <li className='navItem'>
          <Link to="/login"><b>Login</b></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
