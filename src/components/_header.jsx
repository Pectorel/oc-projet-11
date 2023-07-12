import logo from "../assets/img/logo.svg";
import styles from "../assets/style/_header.module.css";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            (isActive ? styles.active + " " : "") + styles["nav-link"]
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/a-propos"}
          className={({ isActive }) =>
            (isActive ? styles.active + " " : "") + styles["nav-link"]
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
