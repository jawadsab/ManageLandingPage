import React, { useRef, useEffect } from 'react';

import './Testimonilas.css';
import Anisha from '../../assets/avatar-ali.png';
import Ali from '../../assets/avatar-anisha.png';
import Richard from '../../assets/avatar-richard.png';
import Shanai from '../../assets/avatar-shanai.png';

import Button from '../Button/Button';

function Testimonials() {
  const slider = useRef();
  const card = useRef();
  useEffect(() => {
    const interval = setInterval(animate, 100);
    return () => clearInterval(interval);
  }, []);
  const animate = () => {
    if (slider && card) {
      const element = slider.current;
      const cardElem = card.current;
      element.style.transform = `translateX(-${
        cardElem.offsetWidth * 4 + 100
      }px)`;
      element.style.transition = 'transform 25s linear';
    }
  };
  const reset = () => {
    const element = slider.current;
    const cardElem = card.current;
    element.style.transition = 'none';
    element.style.transform = `translateX(${cardElem.offsetWidth * 4 + 50}px)`;
  };
  return (
    <>
      <section className="testimonial-main">
        <h1>What they've said</h1>
        <div className="container">
          <div
            ref={slider}
            className="testimonials-animation"
            onTransitionEnd={() => reset()}
          >
            <div ref={card} className="testimonial-card">
              <img src={Anisha} alt="Ali Bravo" />
              <h4>Anisha Li</h4>
              <p>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            <div className="testimonial-card">
              <img src={Ali} alt="Ali Bravo" />
              <h4>Ali Bravo</h4>
              <p>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            <div className="testimonial-card">
              <img src={Richard} alt="Ali Bravo" />
              <h4>Richard Watts</h4>
              <p>
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </p>
            </div>
            <div className="testimonial-card">
              <img src={Shanai} alt="Ali Bravo" />

              <h4>Shanai Gough</h4>
              <p>
                “Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in-sync
                without being intrusive.”
              </p>
            </div>
          </div>
        </div>
        <div style={{textAlign:"center",marginTop:"1rem"}}>
          <Button className="primary-btn">Get Started</Button>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
