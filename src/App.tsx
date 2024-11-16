import { useEffect, useRef } from "react";
import { CountdownRichard } from "./components/richard/CountdownRichard";
import { DvdRichard } from "./components/richard/DvdRichard";
import "./App.css";
import Confetti from "./components/Confetti";
import { Link } from "react-router-dom";

function App() {
  const isConfettiOn = useRef(false);
  useEffect(() => {
    Confetti(isConfettiOn);
  }, []);

  return (
    <div>
      <Link to="/upcoming">Upcoming Birthdays!</Link>
      <CountdownRichard />
      <div className="dvd-container">
        <DvdRichard size={250} />
      </div>
    </div>
  );
}

export default App;
