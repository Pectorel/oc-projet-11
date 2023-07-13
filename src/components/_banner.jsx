import PropTypes from "prop-types";
import styles from "../assets/style/_banner.module.css";

Banner.propTypes = {
  rootTag: PropTypes.oneOf(["section", "header", "div", "article", "footer"]),
  img: PropTypes.string.isRequired,
  titleTag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
};

Banner.defaultProps = {
  rootTag: "section",
  titleTag: "h2",
};

function Banner(props) {
  const RootTag = props.rootTag;
  const TitleTag = props.titleTag;
  return (
    <>
      <RootTag
        className={
          styles.banner + (props.className ? " " + props.className : "")
        }
        style={{ backgroundImage: `url(${props.img}` }}
      >
        {props.title ? (
          <TitleTag className={styles.title}>{props.title}</TitleTag>
        ) : (
          ""
        )}
      </RootTag>
    </>
  );
}

export default Banner;
