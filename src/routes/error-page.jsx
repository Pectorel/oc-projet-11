import styles from "../assets/style/error-page.module.css";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import Header from "../components/_header";
import Footer from "../components/_footer";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <section
        id={styles["error-page"]}
        className={"wrapper d-flex " + styles["d-flex"]}
      >
        <h1 className={styles.title}>{error.status}</h1>
        <p className={styles.text}>
          {error.data.errorMessage
            ? error.data.errorMessage
            : "Oups ! La page que vous demandez n'existe pas."}
        </p>
        <Link to={"/"} className={styles.link}>
          Retourner sur la page d&apos;accueil
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default ErrorPage;
