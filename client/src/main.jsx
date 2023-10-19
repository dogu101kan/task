import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import PrivateRoute from "./components/private-route";
import App from "./App";
import Notfound from "./pages/notfound";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="table" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  </Provider>,
)
