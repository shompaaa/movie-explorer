import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Movies from "./Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'movies',
        Component: Movies,
        loader: ()=>fetch('https://api.tvmaze.com/shows')
      }
    ],
  },
]);

