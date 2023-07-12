import PropTypes from "prop-types";
import styles from "../assets/style/_thumb.module.css";
import { NavLink } from "react-router-dom";

Thumb.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

Thumb.defaultProps = {
  link: "#",
};

function Thumb(props) {
  return (
    <NavLink to={props.link}>
      <article
        className={styles.thumb}
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <h3 className={styles.title}>{props.title}</h3>
      </article>
    </NavLink>
  );
}

export default Thumb;
