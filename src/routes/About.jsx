import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import img from "../assets/img/about-cover.jpg";
import styles from "../assets/style/About.module.css";

function About() {
  return (
    <section id={styles["page-root"]} className={`wrapper`}>
      <Banner img={img} className={styles.banner} />
      <div className={styles["collapse-wrapper"]}>
        <Collapse collapseTitle={"Fiabilité"} className={styles.collapse}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse collapseTitle={"Respect"} className={styles.collapse}>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse collapseTitle={"Service"} className={styles.collapse}>
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N&apos;hésitez pas à nous contacter si vous
            avez la moindre question.
          </p>
        </Collapse>
        <Collapse collapseTitle={"Sécurité"} className={styles.collapse}>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de
            vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </section>
  );
}

export default About;
