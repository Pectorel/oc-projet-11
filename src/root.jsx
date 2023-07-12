import Header from "./components/_header";
import Footer from "./components/_footer";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function Root() {
  // We check if location is root, if so then redirect to /home
  const location = useLocation();
  if (location.pathname === "/") {
    return <Navigate to="/home" replace />;
  }

  // Else return the current layout
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
