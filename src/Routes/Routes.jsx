import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Root/ErrorPage/ErrorPage';
import Home from '../Pages/Root/Home/Home';
import AppsData from '../Pages/Root/AppsData/AppsData';
import AppDetails from '../Pages/Root/AppDetails/AppDetails';
import AllApps from '../Pages/Root/AllApps/AllApps';
import MyInstallation from '../Pages/Root/MyInstallation/MyInstallation';


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
      {
        path: "all-apps",
        loader: () => fetch('/appsData.json').then(res => res.json()),
        element: <AllApps />
      },

      {
        path: 'installation',
        loader: () => fetch('/appsData.json').then(res => res.json()),
        element: <MyInstallation />
      }

     
    ],
  },
]);
