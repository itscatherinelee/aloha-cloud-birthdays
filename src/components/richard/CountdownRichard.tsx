import Richard from "../../assets/richard/richard.png";
import "./CountdownRichard.css";
import Countdown from "react-countdown";
import CelebrationRichard from "./CelebrationRichard";

export function CountdownRichard() {
  return (
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
            <h1>
              {days} days {hours} hours {minutes} minutes {seconds} seconds
            </h1>
          );
        }}
      ></Countdown>
      <img className="image" src={Richard} />
    </div>
  );
}
