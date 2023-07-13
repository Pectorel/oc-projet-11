import Banner from "../components/_banner";
import { useLoaderData } from "react-router-dom";
import styles from "../assets/style/location.module.css";

/*
 * TODO : Change Banner Component for Carousel
 * */
function Location() {
  const location = useLoaderData();

  let hostNameSplit = location["host"]["name"].split(/ (.*)/s);

  return (
    <>
      <section id={`${styles["page-root"]}`} className="wrapper">
        <header>
          <Banner
            rootTag={"div"}
            img={location["cover"]}
            className={styles["banner"]}
          ></Banner>
          <div id={styles["header-details"]} className={"d-flex"}>
            <div>
              <h1 className={styles["title"]}>{location["title"]}</h1>
              <h2 className={styles["subtitle"]}>{location["location"]}</h2>
            </div>
            <div id={styles["host-details"]} className={"d-flex"}>
              <p className={styles["host-name"]}>
                {hostNameSplit[0]}
                <br />
                {hostNameSplit[1]}
              </p>
              <img
                className={styles["profile-picture"]}
                src={location["host"]["picture"]}
                alt={location["host"]["name"]}
              />
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Location;
