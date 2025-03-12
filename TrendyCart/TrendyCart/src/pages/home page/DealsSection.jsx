import React, { useState, useEffect } from 'react';
import dealsImg from "../../assets/deals.png";

const DealsSection = () => {
  
  const targetDate = new Date('may 31, 2025 23:59:59');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <section className='section__container deals__container'>
        <div className='deals__image'>
          <img src={dealsImg} alt="" />
        </div>
        <div className='deals__content'>
          <h5>Get Up To 20% Discount</h5>
          <h4>Deals Of This Month</h4>
          <p>
            Get up to 20% discount on all products from <br /> our shop. Hurry up! Limited time offer.
          </p>

          <div className='deals__countdown flex-wrap'>
            <div className='deals__countdown__card'>
              <h4>{timeLeft.days}</h4>
              <p>Days</p>
            </div>
            <div className='deals__countdown__card'>
              <h4>{timeLeft.hours}</h4>
              <p>Hours</p>
            </div>
            <div className='deals__countdown__card'>
              <h4>{timeLeft.minutes}</h4>
              <p>Minutes</p>
            </div>
            <div className='deals__countdown__card'>
              <h4>{timeLeft.seconds}</h4>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DealsSection;