import { useEffect, useRef } from "react";
import { CountdownRichard } from "./components/richard/CountdownRichard";
import { DvdRichard } from "./components/richard/DvdRichard";
import "./App.css";
import Confetti from "./components/Confetti";
import { Link } from "react-router-dom";
import { RollingAlert } from "./components/RollingAlert";

function App() {
  const isConfettiOn = useRef(false);
  useEffect(() => {
    Confetti(isConfettiOn);
  }, []);

  return (
    <div>
      <Link to="/upcoming">Who's Next????!</Link>
      <CountdownRichard />
      <div className="dvd-container">
        <DvdRichard size={250} />
      </div>
      <RollingAlert />
    </div>
  );
}

export default App;
