import styles from "../assets/style/error-page.module.css";
import { NavLink } from "react-router-dom";
//import { useRouteError } from "react-router-dom";

function ErrorPage() {
  /*const error = useRouteError();
  console.error(error);*/

  return (
    <>
      <section
        id={styles["error-page"]}
        className={"wrapper d-flex " + styles["d-flex"]}
      >
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>
          Oups ! La page que vous demandez n&apos;existe pas.
        </p>
        <NavLink to={"/home"} className={styles.link}>
          Retourner sur la page d&apos;accueil
        </NavLink>
      </section>
    </>
  );
}

export default ErrorPage;
