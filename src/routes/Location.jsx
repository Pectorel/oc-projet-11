import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import styles from "../assets/style/Location.module.css";
import Tag from "../components/Tag";

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
            classes={styles["banner"]}
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
          <div className="d-flex">
            {location["tags"].map((tag, i) => (
              <Tag tagText={tag} key={i} />
            ))}
          </div>
        </header>
      </section>
    </>
  );
}

export default Location;
