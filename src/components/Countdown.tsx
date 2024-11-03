import React, { useEffect, useState } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const targetDate = new Date(`December 19, ${currentYear} 00:00:00`);
    
    // Adjust to next year if December 19 has already passed this year
    if (now > targetDate) {
      targetDate.setFullYear(currentYear + 1);
    }

    const difference = targetDate - now;
    let timeLeft = {};

    // if it is not richard's birthday, do a countdown
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    // todo: if it is richard's birthday, DO A HUGE CELEBRATION

    return timeLeft;
  }

  return (
    <>
      <h1>Richard's Birthday Countdown</h1>
      {timeLeft.days !== undefined ? (
        <div>
          <p>{timeLeft.days} Days</p>
          <p>{timeLeft.hours} Hours</p>
          <p>{timeLeft.minutes} Minutes</p>
          <p>{timeLeft.seconds} Seconds</p>
        </div>
      ) : (
        <p>The countdown has finished!</p>
      )}
    </>
  );
}

export default Countdown;
