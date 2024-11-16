import { useEffect, useRef } from "react";
import { CountdownRichard } from "./components/richard/CountdownRichard";
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
      <Link to="/upcoming">Who's Next????!</Link>
      <CountdownRichard />
    </div>
  );
}

export default App;
