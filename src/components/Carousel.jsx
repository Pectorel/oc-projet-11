import styles from "../assets/style/Carousel.module.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

// Slide Component contained in Carousel Components
Slide.propTypes = {
  img: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

// We set the img and width the slide should use
function Slide(props) {
  return (
    <div
      className={styles.slide}
      style={{ backgroundImage: `url(${props.img})`, width: props.width }}
    ></div>
  );
}

// We set the imgs the Crousel should show and if it autoplays
Carousel.propTypes = {
  imgs: PropTypes.array.isRequired,
};

function Carousel(props) {
  // We set a Ref to get the slider width for setting the Slides width
  const ref = useRef(null);
  // Width and its state to change Slides Width on Resize
  const [width, setWidth] = useState(() => {
    return "auto";
  });
  // Current Slide State
  const [currentSlide, setCurrentSlide] = useState(() => 0);
  //SliderContainer Ref
  const sliderRef = useRef(null);

  useEffect(() => {
    // We first set the width at page startup and then on Window Resize
    setWidth(ref.current.offsetWidth);
    window.addEventListener("resize", () => {
      setWidth(ref.current.offsetWidth);
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevCurrent) =>
      prevCurrent === props.imgs.length - 1 ? 0 : prevCurrent + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevCurrent) =>
      prevCurrent === 0 ? props.imgs.length - 1 : prevCurrent - 1,
    );
  };

  useEffect(() => {
    switchSlide(currentSlide);
  }, [currentSlide, width]);

  const switchSlide = (index) => {
    sliderRef.current.style.left = -(index * ref.current.offsetWidth) + "px";
  };

  return (
    <section className={styles.carousel} ref={ref}>
      {props.imgs.length > 1 ? (
        <div className={styles["arrows-container"]}>
          <div
            className={`${styles.arrow} ${styles.previous}`}
            onClick={prevSlide}
          ></div>
          <div className={`${styles.arrow}`} onClick={nextSlide}></div>
        </div>
      ) : (
        ""
      )}
      <div className={styles["slides-container"]} ref={sliderRef}>
        {props.imgs.map((data, i) => (
          <Slide img={data} width={`${width}px`} key={i} />
        ))}
      </div>
      <span className={styles["slide-index"]}>
        {currentSlide + 1} / {props.imgs.length}
      </span>
    </section>
  );
}

export default Carousel;
