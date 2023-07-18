import styles from "../assets/style/Collapse.module.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

Collapse.propTypes = {
  collapseTitle: PropTypes.string.isRequired,
  collapseContent: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
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
  const listArray = (list) => {
    let content = [];

    list.map((data, i) => {
      content.push(<li key={i}>{data}</li>);
    });

    return <ul ref={contentTextRef}>{content}</ul>;
  };

  const switchCollapse = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    setHeight(`${contentTextRef.current.offsetHeight}px`);
    window.addEventListener("resize", () => {
      setHeight("200px");
    });
  }, []);

  useEffect(() => {
    console.log(open);
    if (open) {
      contentRef.current.style.height = height;
    } else {
      contentRef.current.style.height = 0;
    }
  }, [open, height]);

  return (
    <article className={`${styles.collapse}${open ? ` ${styles.open}` : ""}`}>
      <header className={"d-flex"}>
        <h3>{props.collapseTitle}</h3>
        <span
          className={`${styles.icon} ${styles.chevron}`}
          onClick={switchCollapse}
        ></span>
      </header>
      <section className={styles.content} ref={contentRef}>
        {typeof props.collapseContent === "string" ? (
          <p ref={contentTextRef}>{props.collapseContent}</p>
        ) : (
          listArray(props.collapseContent)
        )}
      </section>
    </article>
  );
}
export default Collapse;
