import Header from "./components/_header";
import Footer from "./components/_footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
