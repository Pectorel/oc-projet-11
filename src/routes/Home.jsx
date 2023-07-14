import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import img from "../assets/img/home-cover.jpg";
import Thumb from "../components/Thumb";
import styles from "../assets/style/home.module.css";

function Home() {
  // Getting data loaded in route loader
  const locations = useLoaderData();

  return (
    <>
      <div id={styles["page-root"]} className="wrapper">
        <Banner
          img={img}
          bannerTitle={[
            "Chez vous, ",
            <br className={"small-down"} key={0} />,
            "partout et ailleurs",
          ]}
        />
        <section id={styles["locations"]} className={"d-grid"}>
          {locations.map((data, i) => (
            <Link to={"/logement/" + data.id} key={i}>
              <Thumb img={data["cover"]} thumbTitle={data["title"]} />
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
