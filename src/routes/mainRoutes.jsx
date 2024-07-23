import { Navigate } from "react-router-dom";
import { routes } from "../constants/routes";

import WebLayout from "../layout/webLayout";

import MainPage from "../pages/MainPage/MainPage/";
import AboutPage from "../pages/AboutPage/AboutPage/";

export const mainRoutes = {
  path: "/",
  element: <WebLayout />,
  children: [
    {
      path: "/",
      element: <Navigate replace to={routes.main} />,
    },
    {
      path: routes.main,
      element: <MainPage />,
    },
    {
      path: routes.about,
      element: <AboutPage />,
    },
  ],
};
