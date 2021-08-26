import React, { useState } from 'react';

import './Navbar.css';
import Brand from '../../assets/brand.svg';
import Ham from '../../assets/iconHamburger.svg';
import Close from '../../assets/iconClose.svg';
import Button from '../Button/Button';

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(true);
  return (
    <>
      {!showHamburger ? <div className="backdrop"></div> : null}

      <nav className="navbar-main">
        <div className="navbar-brand">
          <img src={Brand} alt="manage" />;
        </div>
        <ul
          className={`navbar-items ${
            !showHamburger ? `navbar-items-mobile` : `hide`
          }`}
        >
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
        <div className="navbar-button">
          <Button className="primary-btn nav-btn">Get Started</Button>
        </div>
        <div
          className="toggle-icon"
          onClick={() => setShowHamburger(!showHamburger)}
        >
          {showHamburger ? (
            <img src={Ham} alt="hamburger" />
          ) : (
            <img src={Close} alt="hamburger" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
