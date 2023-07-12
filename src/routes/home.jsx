import { useLoaderData } from "react-router-dom";
import Banner from "../components/_banner";
import img from "../assets/img/home-cover.jpg";
import Thumb from "../components/_thumb";
import styles from "../assets/style/home.module.css";

function Home() {
  // Getting data loaded in route loader
  const locations = useLoaderData();

  return (
    <>
      <div className="wrapper">
        <Banner
          img={img}
          title={[
            "Chez vous, ",
            <br className={"small-down"} key={0} />,
            "partout et ailleurs",
          ]}
        />
        <section id={styles["locations"]} className={"d-grid"}>
          {locations.map((data, i) => (
            <Thumb img={data["cover"]} title={data["title"]} key={i} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
