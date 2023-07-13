import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Home from "./routes/home";
import Root from "./root";
import Location from "./routes/location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
        loader: async () => {
          const res = await fetch("/data/data.json");
          return await res.json();
        },
      },
      {
        path: "/location/:locationId",
        element: <Location />,
      },
      {
        path: "/about",
        element: <div>Page A Propos</div>,
      },
    ],
  },
]);

export default router;
