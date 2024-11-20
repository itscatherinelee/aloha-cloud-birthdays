import Richard from "../../assets/richard/richard.png";
import "./CountdownRichard.css";
import Countdown from "react-countdown";
import CelebrationRichard from "./CelebrationRichard";
import { DvdRichard } from "./DvdRichard";
import { RollingAlert } from "./RollingAlertRichard";

function CountdownRichard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <img className="image" src={Richard} />
        <Countdown
          date={new Date("12-19-2024").setFullYear(new Date().getFullYear())}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <CelebrationRichard />;
            }
            return (
              <div className="thanksgiving-container">
                <h1>🦃 HAPPY THANKSGIVING 🦃</h1>
                <h2>
                  and happy {days} days {hours} hours {minutes} minutes
                  {seconds} seconds until Richard's birthday
                </h2>
              </div>
            );
          }}
        ></Countdown>
        <img className="image" src={Richard} />
      </div>
      <div className="dvd-container">
        <DvdRichard size={250} />
      </div>
      <RollingAlert />
    </>
  );
}
export default CountdownRichard;
