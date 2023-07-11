import PropTypes from "prop-types";
import styles from "../assets/style/_banner.module.css";

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
};

function Banner(props) {
  if (props.title) {
    return (
      <section
        className={styles.banner}
        style={{ backgroundImage: `url(${props.img}` }}
      >
        <h2 className={styles.title}>{props.title}</h2>
      </section>
    );
  }

  return <section style={{ backgroundImage: `url(${props.img}` }}></section>;
}

export default Banner;
