import PropTypes from "prop-types";
import styles from "../assets/style/Rating.module.css";

Rating.propTypes = {
  rateLimit: PropTypes.number,
  rate: PropTypes.number.isRequired,
};
Rating.defaultProps = {
  rateLimit: 5,
};

function Rating(props) {
  const getRating = () => {
    let content = [];
    for (let i = 0; i < props.rateLimit; i++) {
      if (i < props.rate) {
        content.push(
          <span
            className={`${styles.icon} ${styles.star} ${styles.filled}`}
            key={i}
          ></span>,
        );
      } else {
        content.push(
          <span className={`${styles.icon} ${styles.star}`} key={i}></span>,
        );
      }
    }
    return content;
  };

  return <div className={`${styles.rating} d-flex`}>{getRating()}</div>;
}

export default Rating;
