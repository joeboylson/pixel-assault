import { Pages } from "../enums";
import { Home, Shop, Wiki } from "../pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: Pages.INDEX,
    element: <Navigate to={Pages.HOME} replace />,
  },
  {
    path: Pages.HOME,
    element: <Home />,
  },
  {
    path: Pages.WIKI,
    element: <Wiki />,
  },
  {
    path: Pages.WIKI_SELECTED_PAGE,
    element: <Wiki />,
  },
  {
    path: Pages.SHOP,
    element: <Shop />,
  },
]);
