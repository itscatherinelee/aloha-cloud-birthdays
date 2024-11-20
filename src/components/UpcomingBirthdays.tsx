import { useNavigate } from "react-router-dom";

function UpcomingBirthdays() {
  const navigate = useNavigate();
  const birthdayTable = [
    { name: "Charles", birthday: "04/24" },
    { name: "Richard", birthday: "12/19" },
  ];

  return (
    <>
      <h1>Upcoming Birthdays</h1>
      <ul className="list-group">
        {birthdayTable.map((person) => (
          <li
            className="list-group-item"
            key={person.name}
            onClick={() => navigate(`/${person.name}`)}
            style={{ cursor: "pointer" }}
          >
            {person.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UpcomingBirthdays;
