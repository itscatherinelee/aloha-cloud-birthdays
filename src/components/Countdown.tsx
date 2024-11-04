import { useEffect, useState } from "react";
import Richard from "../assets/richard.png";
import './Countdown.css';

// Define the type for the birthday prop
interface Birthday {
  month: number;
  day: number;
}

// Define the type for Countdown component props
interface CountdownProps {
  today: Date;
  birthday: Birthday;
}

function Countdown({ today, birthday }: CountdownProps) {
  const calculateTimeLeft = () => {
    // Calculate next birthday based on the current year
    const nextBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.day);

    // If the birthday has already passed this year, set it to next year
    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    // Calculate time difference in milliseconds
    const timeDifference = nextBirthday.getTime() - today.getTime();

    // Calculate each time component
    const monthsLeft = nextBirthday.getMonth() - today.getMonth() + (nextBirthday.getFullYear() - today.getFullYear()) * 12;
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24) % 30); // Days excluding full months
    const hoursLeft = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeDifference / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeDifference / 1000) % 60);

    return { monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
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
