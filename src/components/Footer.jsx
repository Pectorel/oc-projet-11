import logo from "../assets/img/logo-white.svg";
import styles from "../assets/style/_footer.module.css";

function Footer() {
  return (
    <footer id={styles["page-footer"]}>
      <div className={"wrapper d-flex " + styles["d-flex"]}>
        <img src={logo} alt="Kasa Logo Footer" className={styles["logo"]} />
        <span>&copy; {new Date().getFullYear()} Kasa. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
