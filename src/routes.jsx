import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Home from "./routes/home";
import Header from "./components/_header";
import Footer from "./components/_footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement/:logementId",
    element: (
      <>
        <Header />
        <div>Page Logement</div>
        <Footer />
      </>
    ),
  },
  {
    path: "/a-propos",
    element: (
      <>
        <Header />
        <div>Page A Propos</div>
        <Footer />
      </>
    ),
  },
]);

export default router;
