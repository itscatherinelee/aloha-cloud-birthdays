import { useEffect, useRef } from "react";
import { BirthdayCountdown } from "./components/Countdown";
import party from 'party-js';

function App() {
    const isConfettiOn = useRef(false);

    useEffect(() => {
      const shootConfetti = (event: MouseEvent) => {
        if (!isConfettiOn.current) {
          isConfettiOn.current = true;
  
          party.confetti(event, {
            count: party.variation.range(0, 5),
            spread: 100,
          });
  
          requestAnimationFrame(() => {
            isConfettiOn.current = false;
          });
        }
      };
  
      document.addEventListener('mousemove', shootConfetti);
      return () => {
        document.removeEventListener('mousemove', shootConfetti);
      };
    }, []);

  return (
    <div>
      <BirthdayCountdown />
    </div>
  );
}

export default App;