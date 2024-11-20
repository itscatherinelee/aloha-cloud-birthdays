import { useEffect, useRef } from "react";
import CountdownRichard from "./components/richard/CountdownRichard";
import "./App.css";
import Confetti from "./components/Confetti";

function App() {
  const isConfettiOn = useRef(false);
  useEffect(() => {
    Confetti(isConfettiOn);
  }, []);

  return <CountdownRichard />;
}

export default App;
