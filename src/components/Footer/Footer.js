import React from 'react';

import './Footer.css';
import Brand from '../../assets/brand-light.svg';
import Facebook from '../../assets/icon-facebook.svg';
import Insta from '../../assets/icon-instagram.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import Twitter from '../../assets/icon-twitter.svg';
import YT from '../../assets/icon-youtube.svg';

import Button from "../Button/Button"

function Footer() {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-left">
          <div>
            <img src={Brand} alt="manage" />
          </div>
          <div className="social-icons">
            <img src={Facebook} alt="facebook" />
            <img src={Insta} alt="instagram" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Twitter} alt="twitter" />
            <img src={YT} alt="youtube" />
          </div>
          <p className="copyright-bottom">Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="footer-center">
          <ul className="footer-items-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <ul className="footer-items-2">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
            <div>
                <input type="text" placeholder="Updates in your inbox..." />
                <Button className="primary-btn">Go</Button>
                <p className="copyright">Copyright 2021. All Rights Reserved</p>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
