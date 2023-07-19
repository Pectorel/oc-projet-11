import styles from "../assets/style/ErrorPage.module.css";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Header />
      <main
        id={styles["page-root"]}
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
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
