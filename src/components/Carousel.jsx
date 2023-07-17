import styles from "../assets/style/Carousel.module.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

Slide.propTypes = {
  img: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
function Slide(props) {
  return (
    <div
      className={styles.slide}
      style={{ backgroundImage: `url(${props.img})`, width: props.width }}
    ></div>
  );
}

Carousel.propTypes = {
  imgs: PropTypes.array.isRequired,
  autoplay: PropTypes.bool,
};

Carousel.defaultProps = {
  autoplay: true,
};

function Carousel(props) {
  const ref = useRef(null);
  const [width, setWidth] = useState(() => {
    return "auto";
  });

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    window.addEventListener("resize", () => {
      setWidth(ref.current.offsetWidth);
    });
  }, []);

  return (
    <section className={styles.carousel} ref={ref}>
      {props.imgs.length > 0 ? (
        <div className={styles["arrows-container"]}>
          <div className={`${styles.arrow} ${styles.previous}`}></div>
          <div className={`${styles.arrow} ${styles.next}`}></div>
        </div>
      ) : (
        ""
      )}
      <div className={styles["slides-container"]}>
        {props.imgs.map((data, i) => (
          <Slide img={data} width={`${width}px`} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
