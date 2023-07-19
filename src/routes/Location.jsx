import { useLoaderData } from "react-router-dom";
import styles from "../assets/style/Location.module.css";
import Tag from "../components/Tag";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Host from "../components/Host";

/*
 * TODO : Change Banner Component for Carousel
 * */
function Location() {
  const location = useLoaderData();

  const listArray = (list) => {
    let res = <p>Error, list in not of type Array</p>;

    if (Array.isArray(list)) {
      let content = [];
      list.map((data, i) => {
        content.push(<li key={i}>{data}</li>);
      });

      res = <ul>{content}</ul>;
    }

    return res;
  };

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
              <Host
                hostName={location["host"]["name"]}
                hostPicture={location["host"]["picture"]}
              />
            </div>
            <div id={styles["rating"]} className={"d-flex"}>
              <Rating rate={parseInt(location["rating"])} />
            </div>
          </div>
        </section>
        <section id={styles["collapse-container"]} className="d-flex">
          <Collapse collapseTitle={"Description"}>
            <p>{location["description"]}</p>
          </Collapse>
          <Collapse collapseTitle={"Équipements"}>
            {listArray(location["equipments"])}
          </Collapse>
        </section>
      </section>
    </>
  );
}

export default Location;
