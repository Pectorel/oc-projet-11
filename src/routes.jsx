import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Home from "./routes/home";
import Root from "./root";

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
      },
      {
        path: "logement/:logementId",
        element: <div>Page Logement</div>,
      },
      {
        path: "a-propos",
        element: <div>Page A Propos</div>,
      },
    ],
  },
]);

export default router;
