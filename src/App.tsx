import { useEffect, useRef } from "react";
import { BirthdayCountdown } from "./components/Countdown";
import { DvdRichard } from "./components/DvdRichard";
import "./App.css";
import Confetti from "./components/Confetti";
import { RollingAlert } from "./components/RollingAlert";

function App() {
    const isConfettiOn = useRef(false);
    useEffect(() => {
      Confetti(isConfettiOn)
    }, []);

  return (
    <div>
      <BirthdayCountdown />
      <div className="dvd-container">
        <DvdRichard size={250} />
      </div>
      <RollingAlert />
    </div>
  );
}

export default App;