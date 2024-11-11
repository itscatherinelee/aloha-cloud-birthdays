import { useEffect, useRef } from "react";
import { BirthdayCountdown } from "./components/Countdown";
import { DvdRichard } from "./components/DvdRichard";
import "./App.css";
import Confetti from "./components/Confetti";

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
    </div>
  );
}

export default App;