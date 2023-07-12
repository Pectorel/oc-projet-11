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
        path: "/home",
        element: <Home />,
        index: true,
        loader: async () => {
          const res = await fetch("/data/data.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "logement/:logementId",
        element: <Location />,
      },
      {
        path: "a-propos",
        element: <div>Page A Propos</div>,
      },
    ],
  },
]);

export default router;
