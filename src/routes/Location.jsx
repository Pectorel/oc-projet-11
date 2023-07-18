import { useLoaderData } from "react-router-dom";
import styles from "../assets/style/Location.module.css";
import Tag from "../components/Tag";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

/*
 * TODO : Change Banner Component for Carousel
 * */
function Location() {
  const location = useLoaderData();

  let hostNameSplit = location["host"]["name"].split(/ (.*)/s);

  return (
    <>
      <section id={`${styles["page-root"]}`} className="wrapper">
        <Carousel imgs={location["pictures"]} />
        <section id={styles["location-details"]} className="d-flex">
          <header className={"d-flex"}>
            <h1 className={styles["title"]}>{location["title"]}</h1>
            <h2 className={styles["subtitle"]}>{location["location"]}</h2>
            <div id={styles["tags-container"]} className="d-flex">
              {location["tags"].map((tag, i) => (
                <Tag tagText={tag} key={i} />
              ))}
            </div>
          </header>
          <div id={styles["secondary-details"]} className="d-flex">
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
            <div id={styles["rating"]} className={"d-flex"}>
              <Rating rate={parseInt(location["rating"])} />
            </div>
          </div>
        </section>
        <section id={styles["collapse-container"]} className="d-flex">
          <Collapse
            collapseTitle={"Description"}
            collapseContent={location["description"]}
          />
          <Collapse
            collapseTitle={"Équipements"}
            collapseContent={location["equipments"]}
          />
        </section>
      </section>
    </>
  );
}

export default Location;
