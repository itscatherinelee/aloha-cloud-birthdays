import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UpcomingBirthdays from "./components/UpcomingBirthdays";
import { CountdownRichard } from "./components/richard/CountdownRichard";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/upcoming", element: <UpcomingBirthdays /> },
  { path: "/richard", element: <CountdownRichard /> },
]);
export default router;
