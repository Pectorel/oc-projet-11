import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
