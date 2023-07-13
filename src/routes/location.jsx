import Banner from "../components/_banner";
import { useLoaderData } from "react-router-dom";
import styles from "../assets/style/location.module.css";

function Location() {
  const location = useLoaderData();
  console.log(location);

  return (
    <>
      <section id={`${styles["page-root"]}`} className="wrapper">
        <header>
          <Banner
            rootTag={"div"}
            img={location["cover"]}
            className={styles["banner"]}
          ></Banner>
          <div className={"d-flex"}>
            <div>
              <h1>{location.title}</h1>
              <h2>{location.location}</h2>
            </div>
            <div></div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Location;
