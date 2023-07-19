import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import img from "../assets/img/about-cover.jpg";
import styles from "../assets/style/About.module.css";

function About() {
  return (
    <section id={styles["page-root"]} className={`wrapper`}>
      <Banner img={img} classes={styles.banner} />
      <Collapse collapseTitle={"Fiabilité"}></Collapse>
    </section>
  );
}

export default About;
