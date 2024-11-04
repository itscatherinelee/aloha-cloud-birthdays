import { useEffect, useState } from "react";
import Richard from "../assets/richard.png";
import './Countdown.css';

interface Birthday {
  month: number;
  day: number;
}

interface CountdownProps {
  birthday: Birthday;
}

function Countdown({ birthday }: CountdownProps) {
  const calculateTimeLeft = () => {
    const today = new Date(); // Get the current date each time this function runs
    const nextBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.day);

    // If the birthday has already passed this year, set it to next year
    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    // Calculate time difference in milliseconds
    const timeDifference = nextBirthday.getTime() - today.getTime();

    // Calculate each time component
    const monthsLeft = nextBirthday.getMonth() - today.getMonth() + (nextBirthday.getFullYear() - today.getFullYear()) * 12;
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24) % 30);
    const hoursLeft = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeDifference / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeDifference / 1000) % 60);

    return { monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
      <img className="image" src={Richard} alt="" />
      <h1>
        {timeLeft.monthsLeft} months {timeLeft.daysLeft} days {timeLeft.hoursLeft} hours {timeLeft.minutesLeft} minutes {timeLeft.secondsLeft} seconds
      </h1>
      <img className="image" src={Richard} alt="" />
    </div>
  );
}

export default Countdown;
