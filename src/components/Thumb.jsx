import PropTypes from "prop-types";
import styles from "../assets/style/Thumb.module.css";

Thumb.propTypes = {
  link: PropTypes.string,
  thumbTitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

function Thumb(props) {
  return (
    <article
      className={styles.thumb}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <h3 className={styles.title}>{props.thumbTitle}</h3>
    </article>
  );
}

export default Thumb;
