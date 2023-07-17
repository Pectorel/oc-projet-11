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
  autoplay: PropTypes.bool,
  autoplayTime: PropTypes.number,
};

Carousel.defaultProps = {
  autoplay: true,
  autoplayTime: 5000,
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
  // MouseOverState
  const [pauseAutoplay, setPauseAutoplay] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevCurrent) =>
      prevCurrent === props.imgs.length - 1 ? 0 : prevCurrent + 1,
    );

    // Pause the Autoplay from triggering when already switching slide
    if (props.autoplay) {
      setPauseAutoplay(true);
      setTimeout(() => {
        setPauseAutoplay(false);
      }, 600);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prevCurrent) =>
      prevCurrent === 0 ? props.imgs.length - 1 : prevCurrent - 1,
    );

    // Pause the Autoplay from triggering when already switching slide
    if (props.autoplay) {
      setPauseAutoplay(true);
      setTimeout(() => {
        setPauseAutoplay(false);
      }, 600);
    }
  };

  useEffect(() => {
    switchSlide(currentSlide);
  }, [currentSlide, width]);

  const switchSlide = (index) => {
    sliderRef.current.style.left = -(index * ref.current.offsetWidth) + "px";
  };

  useEffect(() => {
    // We first set the width at page startup and then on Window Resize
    setWidth(ref.current.offsetWidth);
    window.addEventListener("resize", changeWidth);
    document.addEventListener("keydown", keyboardHandler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const changeWidth = () => {
    setWidth(ref.current.offsetWidth);
  };

  const keyboardHandler = (event) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  };

  useEffect(() => {
    if (props.autoplay) {
      ref.current.addEventListener("mouseenter", () => {
        setPauseAutoplay(true);
      });

      ref.current.addEventListener("mouseleave", () => {
        setPauseAutoplay(false);
      });

      const autoplay = setInterval(() => {
        if (!pauseAutoplay) {
          nextSlide();
        }
      }, props.autoplayTime);

      // Cleanup function on re-render
      return () => {
        clearInterval(autoplay);
      };
    }
  }, [pauseAutoplay]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className={styles.carousel} ref={ref} onKeyDown={keyboardHandler}>
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
