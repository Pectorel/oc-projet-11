import PropTypes from "prop-types";
import styles from "../assets/style/Tag.module.css";

Tag.propTypes = {
  tagText: PropTypes.string,
};

function Tag(props) {
  return (
    <div className={styles.tag}>
      <span>{props.tagText}</span>
    </div>
  );
}

export default Tag;
