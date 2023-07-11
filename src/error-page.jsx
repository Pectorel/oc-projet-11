import styles from "./assets/style/error-page.module.css";

function ErrorPage() {
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
        <a className={styles.link} href="/">
          Retourner sur la page d&apos;accueil
        </a>
      </section>
    </>
  );
}

export default ErrorPage;
