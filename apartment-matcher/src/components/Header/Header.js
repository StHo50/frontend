import React from 'react';
import './Header.css';
import amlogo from '../../assets/amlogo.png'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">דף הבית</a></li>
          <li><a href="/about">אודות</a></li>
          <li><a href="/matching">התאמת דירה</a></li>
          <li><a href="/customerreviewspage">חוויות לקוחות</a></li>
          <li><a href="/contact">צור קשר</a></li>
        </ul>
      </nav>
      <div className="logo">
        <span>Apartment Matcher</span>
        <img src={amlogo} alt="Company Logo" className="logo-image" />
      </div>
    </header>
  );
};

export default Header;
