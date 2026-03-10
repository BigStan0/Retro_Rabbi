import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Booking from "../pages/Booking";
import Tutorials from "../pages/Tutorials";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'booking',
        element: <Booking />
      },
      {
        path: 'tutorials',
        element: <Tutorials />
      },
    ],
  },
]);