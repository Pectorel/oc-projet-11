import { useLoaderData } from "react-router-dom";
import Banner from "../components/_banner";
import img from "../assets/img/home-cover.jpg";
import Thumb from "../components/_thumb";
import styles from "../assets/style/home.module.css";

function Home() {
  const locations = useLoaderData();

  return (
    <>
      <div className="wrapper">
        <Banner img={img} title={"Chez vous, partout et ailleurs"} />
        <section id={styles["locations"]} className={"d-flex"}>
          {locations.map((data, i) => (
            <Thumb img={data.cover} title={data.title} key={i} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
