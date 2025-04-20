import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Favourite from "../pages/Favourite";
import About from "../pages/About";
import PhonesDetails from "../pages/PhonesDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        hydrateFallbackElement: <h1>Loading here...</h1>,
        loader: () => fetch("../phones.json"),
        Component: Home,
      },
      {
        path: "/favourites",
        Component: Favourite,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/phoneDetails/:id",
        loader: () => fetch("../phones.json"),
        Component: PhonesDetails,
      },
    ],
  },
]);
