import App from "./App";
import CountdownCharles from "./components/charles/CountdownCharles";
import CountdownRichard from "./components/richard/CountdownRichard";
import Layout from "./layout";
import UpcomingBirthdays from "./components/UpcomingBirthdays";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
      { path: "charles", element: <CountdownCharles /> },
      { path: "richard", element: <CountdownRichard /> },
      { path: "upcoming", element: <UpcomingBirthdays /> },
    ],
  },
]);
export default router;
