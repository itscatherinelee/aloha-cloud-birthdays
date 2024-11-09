import { BirthdayCountdown } from "./components/Countdown";
import { DvdRichard } from "./components/DvdRichard";

function App() {

  return (
    <div>
      <BirthdayCountdown />
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -2,
      }}>
        <DvdRichard size={250} />
      </div>
    </div>
  );
}

export default App;