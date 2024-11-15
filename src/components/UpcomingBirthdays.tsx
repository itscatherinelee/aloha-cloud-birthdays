import { Link } from "react-router-dom";

function UpcomingBirthdays() {
  const birthdayTable = [
    { name: "Richard", birthday: "12/19" },
    { name: "Charles", birthday: "04/24" },
  ];

  const handleClick = (event: React.MouseEvent) => console.log(event);

  return (
    <>
      <h1>Upcoming Birthdays</h1>
      <ul className="list-group">
        {birthdayTable.map((person) => (
          <li
            className="list-group-item"
            key={person.name}
            onClick={handleClick}
          >
            {person.name}
          </li>
        ))}
        ;
      </ul>
      <Link to="/">Back</Link>
    </>
  );
}
export default UpcomingBirthdays;
