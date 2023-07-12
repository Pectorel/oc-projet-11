import Banner from "../components/_banner";
import img from "../assets/img/home-cover.jpg";
import img2 from "../assets/img/about-cover.jpg";
import Thumb from "../components/_thumb";
import styles from "../assets/style/home.module.css";

let fake_data = [
  {
    img: img2,
    title: "Titre de la location",
  },
  {
    img: img2,
    title: "Titre de la location",
  },
  {
    img: img2,
    title: "Titre de la location",
  },
  {
    img: img2,
    title: "Titre de la location",
  },
];

function Home() {
  return (
    <>
      <div className="wrapper">
        <Banner img={img} title={"Chez vous, partout et ailleurs"} />
        <section id={styles.locations} className={"d-flex"}>
          {fake_data.map((data, i) => (
            <Thumb img={data.img} title={data.title} key={i} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
