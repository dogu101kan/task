import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import PrivateRoute from "../components/private-route";
import App from "../App";
import Notfound from "../pages/notfound"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <Login />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
      {
        path: "table",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <Home />,
          }
        ],
      },
    ],
  },
]);

export default routes;
