import React from 'react';
import './index.css';

import {
  Navbar,
  Hero,
  Features,
  Testimonials,
  Banner,
  Footer,
} from './components';
import SVG from './assets/bg-tablet-pattern.svg';

const App = () => {
  return (
    <>
      <div className="design">
        <img src={SVG} alt="..." />
      </div>
      <Navbar />
      <Hero />
      <div className="design-1">
        <img src={SVG} alt="..." />
      </div>
      <Features />
      <Testimonials />
      <Banner />
      <Footer />
    </>
  );
};

export default App;
