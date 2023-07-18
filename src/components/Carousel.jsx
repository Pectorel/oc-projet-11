import styles from "../assets/style/Carousel.module.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

// ========= Carousel Component
// Carousel props contains the array of all imgs sources and if it should autoplay
Carousel.propTypes = {
  imgs: PropTypes.array.isRequired,
  autoplay: PropTypes.bool,
  autoplayTime: PropTypes.number,
};
// By Default Carousel autoplays with a 5s delay between each Slides change
Carousel.defaultProps = {
  autoplay: true,
  autoplayTime: 5000,
};
function Carousel(props) {
  // ========= Properties
  // We set a Ref to get the slider width for setting the Slides width
  const ref = useRef(null);
  // Width and its state to change Slides Width
  const [width, setWidth] = useState(() => {
    return "auto";
  });
  // Current Slide State
  const [currentSlide, setCurrentSlide] = useState(() => 0);
  // SlidesContainer Ref
  const sliderRef = useRef(null);
  // Autoplay State to pause Autoplay on demand
  const [pauseAutoplay, setPauseAutoplay] = useState(false);

  // ========= When Page is Ready
  // Switch Slides on Arrow Left and Right
  const keyboardHandler = (event) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  };
  // Change the Carousel Width for responsive design
  const changeWidth = () => {
    setWidth(ref.current.offsetWidth);
  };
  // Contains all global DOM EventListener
  useEffect(() => {
    // We first set the width at page startup and then on Window Resize
    setWidth(ref.current.offsetWidth);
    window.addEventListener("resize", changeWidth);
    // We set Keyboard Event for switching slides
    document.addEventListener("keydown", keyboardHandler);
    // Cleanup Event Listener on re-render
    return () => {
      window.removeEventListener("resize", changeWidth);
      document.removeEventListener("keydown", keyboardHandler);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ========= Slider Functions
  const nextSlide = () => {
    setCurrentSlide((prevCurrent) =>
      prevCurrent === props.imgs.length - 1 ? 0 : prevCurrent + 1,
    );
    autoplayHandler(true);
  };
  const prevSlide = () => {
    setCurrentSlide((prevCurrent) =>
      prevCurrent === 0 ? props.imgs.length - 1 : prevCurrent - 1,
    );
    autoplayHandler(true);
  };
  const switchSlide = (index) => {
    sliderRef.current.style.left = -(index * ref.current.offsetWidth) + "px";
  };
  // When the Currentslide or Carousel width is changing, then we trigger a Slide Change
  useEffect(() => {
    switchSlide(currentSlide);
  }, [currentSlide, width]);

  // ========= Autoplay Feature
  // Switch Autoplay for the mouseDown / mouseLeave event on Carousel DOM
  const autoplayEventHandler = (event) => {
    if (event.name === "mouseenter") {
      setPauseAutoplay(true);
    } else if (event.name === "mouseleave") {
      setPauseAutoplay(false);
    }
  };
  // Pause the Autoplay from triggering when already switching slide
  const autoplayHandler = (state) => {
    // Only triggers if autoplay was not already paused
    if (props.autoplay) {
      // We set a Timeout to reenable autoplay a short time after the slide changed
      setPauseAutoplay((prevState) => {
        if (!prevState) {
          setTimeout(() => {
            setPauseAutoplay(!state);
          }, 600);
        }
        return state;
      });
    }
  };
  useEffect(() => {
    // If autoplay feature is enabled
    if (props.autoplay) {
      // Set mouse Events on the Carousel DOM
      ref.current.addEventListener("mouseenter", autoplayEventHandler);
      ref.current.addEventListener("mouseleave", autoplayEventHandler);
      // Initialize the Autoplay Interval
      const autoplay = setInterval(() => {
        if (!pauseAutoplay) {
          nextSlide();
        }
      }, props.autoplayTime);
      // Cleanup Intervals and EventListeners on re-render
      return () => {
        clearInterval(autoplay);
        // If ref and ref.current exists in DOM, then we remove the EventListeners
        if (ref && ref.current) {
          ref.current.removeEventListener("mouseenter", autoplayEventHandler); // eslint-disable-line react-hooks/exhaustive-deps
          ref.current.removeEventListener("mouseleave", autoplayEventHandler); // eslint-disable-line react-hooks/exhaustive-deps
        }
      };
    }
  }, [pauseAutoplay]); // eslint-disable-line react-hooks/exhaustive-deps

  // ========= Component DOM
  return (
    <section className={styles.carousel} ref={ref} onKeyDown={keyboardHandler}>
      {props.imgs.length > 1 ? (
        <>
          <div className={styles["arrows-container"]}>
            <div
              className={`${styles.arrow} ${styles.previous}`}
              onClick={prevSlide}
            ></div>
            <div className={`${styles.arrow}`} onClick={nextSlide}></div>
          </div>
          <span className={styles["slide-index"]}>
            {currentSlide + 1} / {props.imgs.length}
          </span>
        </>
      ) : (
        ""
      )}
      <div className={styles["slides-container"]} ref={sliderRef}>
        {props.imgs.map((data, i) => (
          <Slide img={data} width={`${width}px`} key={i} />
        ))}
      </div>
    </section>
  );
}

// ========= Slide Component (Only used in Carousel)
/* Slides props contains the img src string
 * and its width (basically the carousel root width)
 */
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
export default Carousel;
