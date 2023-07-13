import logo from "../assets/img/logo.svg";
import styles from "../assets/style/_header.module.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      id={styles["page-header"]}
      className={"wrapper d-flex " + styles["d-flex"]}
    >
      <h1>
        <Link to={"/"}>
          <img
            src={logo}
            alt="Kasa Logo Header"
            className={styles["header-logo"]}
          />
        </Link>
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
          to={"/about"}
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
