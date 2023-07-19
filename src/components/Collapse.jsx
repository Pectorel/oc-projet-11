import styles from "../assets/style/components/Collapse.module.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

Collapse.propTypes = {
  collapseTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.element,
};
function Collapse(props) {
  const [open, setOpen] = useState(() => {
    return false;
  });
  const contentRef = useRef(null);
  const [height, setHeight] = useState(() => {
    return 0;
  });
  const contentTextRef = useRef(null);

  const switchCollapse = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  const changeHeight = () => {
    setHeight(`${contentTextRef.current.offsetHeight}px`);
  };

  useEffect(() => {
    setHeight(`${contentTextRef.current.offsetHeight}px`);
    window.addEventListener("resize", changeHeight);

    return () => {
      window.removeEventListener("resize", changeHeight);
    };
  }, []);

  useEffect(() => {
    if (open) {
      contentRef.current.style.height = height;
    } else {
      contentRef.current.style.height = 0;
    }
  }, [open, height]);

  return (
    <article
      className={`${styles.collapse}${open ? ` ${styles.open}` : ""}${
        props.className ? ` ${props.className}` : ""
      }`}
    >
      <header className={"d-flex"} onClick={switchCollapse}>
        <h3>{props.collapseTitle}</h3>
        <span className={`${styles.icon} ${styles.chevron}`}></span>
      </header>
      <section className={styles.content} ref={contentRef}>
        <div ref={contentTextRef}>{props.children}</div>
      </section>
    </article>
  );
}
export default Collapse;
