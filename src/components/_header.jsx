import logo from "../assets/img/logo.svg";
import styles from "../assets/style/_header.module.css";

function Header() {
  return (
    <header
      id={styles["page-header"]}
      className={"wrapper d-flex " + styles["d-flex"]}
    >
      <h1>
        <a href={"/"}>
          <img
            src={logo}
            alt="Kasa Logo Header"
            className={styles["header-logo"]}
          />
        </a>
      </h1>
      <nav>
        <a href={"/"} className={styles["nav-link"]}>
          Accueil
        </a>
        <a href={"/a-propos"} className={styles["nav-link"]}>
          A Propos
        </a>
      </nav>
    </header>
  );
}

export default Header;
