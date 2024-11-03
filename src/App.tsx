import Celebration from "./components/Celebration";
import Countdown from "./components/Countdown";

function App() {
  const isBirthday = true;

  return (
    <div>
      {isBirthday ? <Celebration /> : <Countdown />}
    </div>
  );
}

export default App;