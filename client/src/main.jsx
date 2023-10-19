import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import AppRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  </Provider>,
)
