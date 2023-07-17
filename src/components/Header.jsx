import logo from "../assets/img/logo.svg";
import styles from "../assets/style/Header.module.css";
import { Link, NavLink, useMatches } from "react-router-dom";

function Header() {
  /* If homepage, then logo is H1, otherwise it is simply A tag */
  const matches = useMatches().at(-1);
  let $logo = (
    <Link to={"/"}>
      <img src={logo} alt="Kasa - Accueil" className={styles["header-logo"]} />
    </Link>
  );
  if (matches.pathname === "/") {
    $logo = <h1>{$logo}</h1>;
  }

  return (
    <header
      id={styles["page-header"]}
      className={"wrapper d-flex " + styles["d-flex"]}
    >
      {$logo}
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
