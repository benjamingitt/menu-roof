import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.scss';
import Logo from './Logo';

function StartPage() {
  return (
    <div className="start-page">
      <div className="logo-container">
        <Logo />
      </div>
      <h1 />
      <Link to="/menu" className="start-button">
        Меню
      </Link>
    </div>
  );
}

export default StartPage;
