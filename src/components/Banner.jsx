import PropTypes from "prop-types";
import styles from "../assets/style/components/Banner.module.css";

Banner.propTypes = {
  rootTag: PropTypes.oneOf(["section", "header", "div", "article", "footer"]),
  img: PropTypes.string.isRequired,
  titleTag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  bannerTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
        {props.bannerTitle ? (
          <TitleTag className={styles.title}>{props.bannerTitle}</TitleTag>
        ) : (
          ""
        )}
      </RootTag>
    </>
  );
}

export default Banner;
