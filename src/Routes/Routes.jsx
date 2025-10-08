import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Root/ErrorPage/ErrorPage';
import Home from '../Pages/Root/Home/Home';
import AppsData from '../Pages/Root/AppsData/AppsData';
import AppDetails from '../Pages/Root/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('./appsData.json'),
        element: <Home />,
      },
      {
        path: "appsData",
        loader: () => fetch('./appsData.json'),
        element: <AppsData />,
      },
      {
        path: "appsData/:id",
        loader: async ({ params }) => {
          const res = await fetch('/appsData.json');
          const data = await res.json();
          return data.find(app => app.id == params.id);
        },
        element: <AppDetails />,
      },
    ],
  },
]);
