import Richard from "../../assets/richard/richard.png";
import "./CountdownRichard.css";
import Countdown from "react-countdown";
import CelebrationRichard from "./CelebrationRichard";
import { DvdRichard } from "./DvdRichard";
import { RollingAlert } from "./RollingAlertRichard";

function CountdownRichard() {
  return (
    <div className="background">
      <Countdown
        date={new Date("12-19-2024").setFullYear(new Date().getFullYear())}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <CelebrationRichard />;
          }
          return (
            <div className="horizontal-container">
              <img className="image" src={Richard} />
              <div className="vertical-container">
                <h1>🦃 HAPPY THANKSGIVING 🦃</h1>
                <h2>and happy</h2>
                <h2>
                  {days} days {hours} hours {minutes} minutes {seconds} seconds
                </h2>
                <h2>until Richard's birthday</h2>
              </div>
              <img className="image" src={Richard} />
            </div>
          );
        }}
      ></Countdown>
      <div className="dvd-container">
        <DvdRichard size={250} />
      </div>
      <RollingAlert />
    </div>
  );
}
export default CountdownRichard;
