import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './pages/dashboard';
import Stocks from './pages/stocks';
import Logs from './pages/logs';
import EmpDashboard from './pages/dashboard/Employee';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
      {
          path: '/',
          element: <App/>,
      },
        {
        path: "/Stocks",
        element: <Stocks />,
      },
      {
        path: "/Logs",
        element: <Logs />,
      },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
    path: "/EmpDashboard",
      element: <EmpDashboard />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

