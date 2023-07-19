import styles from "../assets/style/Location.module.css";
import PropTypes from "prop-types";

Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
};

function Host(props) {
  let hostNameSplit = props.hostName.split(/ (.*)/s);

  return (
    <>
      <p className={styles["host-name"]}>
        {hostNameSplit[0]}
        <br />
        {hostNameSplit[1]}
      </p>
      <img
        className={styles["profile-picture"]}
        src={props.hostPicture}
        alt={props.hostName}
      />
    </>
  );
}

export default Host;
