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

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div>
      <h1>Countdown to December 19</h1>
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
    </div>
  );
}

export default Countdown;
