import Richard from "../assets/richard.png";
import './Countdown.css';
import Countdown from "react-countdown";
import Celebration from "./Celebration";


export function BirthdayCountdown() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
      <img className="image" src={Richard} />
        <Countdown
          date={new Date("12-19-2024").setFullYear(new Date().getFullYear())}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <Celebration />
            }
            return <h1>{days} days {hours} hours {minutes} minutes {seconds} seconds</h1>
          }}
        >
        </Countdown>
      <img className="image" src={Richard} />
    </div>
  );
}

