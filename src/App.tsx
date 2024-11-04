import Celebration from "./components/Celebration";
import Countdown from "./components/Countdown";

function App() {
  // Define your birthday date
  const birthday = {
    month: 12, // November
    day: 19,
  };

  // Today's date
  const today = new Date();

  // Function to check if today is the birthday
  const isBirthday = () => {
    return (
      today.getMonth() + 1 === birthday.month && // getMonth() is 0-indexed
      today.getDate() === birthday.day
    );
  };

  return (
    <div>
      {isBirthday() ? <Celebration/> : <Countdown today={today} birthday={birthday} />}
    </div>
  );
}

export default App;