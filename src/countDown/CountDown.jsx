import React, { useState, useEffect } from 'react';
import Blessings from '../blessings/Blessings';
import './Countdown.css';
const CountDown = () => {
  const targetDate = new Date('2024-07-05T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
    <>
<div className="timer-container">
      <div className="timer">
        <span>{timeLeft.days}<div class="weight">ימים</div> </span>
        <span>|</span>
        <span>{timeLeft.hours} <div class="weight">שעות</div></span>
        <span>|</span>
        <span>{timeLeft.minutes}<div class="weight">דקות</div> </span>
        <span>|</span>
        <span>{timeLeft.seconds}<div class="weight">שניות</div></span>
      </div>
</div>


    <Blessings/>
    
    <div className="footer">
  
        <span>כל הזכויות שמורות לחברות המתכנתות האלופות  </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
</svg >
      </div>
    </>
  );
};

export default CountDown;