import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import PrivateRoute from "../components/private-route";
import Notfound from "../pages/notfound";
import App from "../App"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route
          path="table"
          element={
            <PrivateRoute>
              <Route index element={<Home />} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;