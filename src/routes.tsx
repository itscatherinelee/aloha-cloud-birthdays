import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UpcomingBirthdays from "./components/UpcomingBirthdays";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/upcoming", element: <UpcomingBirthdays /> },
]);
export default router;
