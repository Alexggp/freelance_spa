import { useRef, useEffect } from "react";
import { useCursor } from "../../contexts/CursorContext";
import useMouseSpeed from "../../../src copy/hooks/useMouseSpeed";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const speed = useMouseSpeed();
  const { cursorType } = useCursor();
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
        cursorRef.current.style.transform = `scale(${1 + speed / 1000})`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [speed]);

  return <div ref={cursorRef} className={`${styles.cursor} ${styles[cursorType]}`} />;
};

export default CustomCursor;
