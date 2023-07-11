import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement/:logementId",
    element: <div>Page Logement</div>,
  },
  {
    path: "/a-propos",
    element: <div>Page A propos</div>,
  },
]);

export default router;
