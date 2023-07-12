import PropTypes from "prop-types";
import styles from "../assets/style/_banner.module.css";

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

function Banner(props) {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${props.img}` }}
    >
      {props.title ? <h2 className={styles.title}>{props.title}</h2> : ""}
    </section>
  );
}

export default Banner;
