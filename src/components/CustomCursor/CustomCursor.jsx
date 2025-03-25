import { useRef, useEffect } from "react";
import { useCursor } from "../../contexts/CursorContext";
import useMouseSpeed from "../../hooks/useMouseSpeed";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const speed = useMouseSpeed();
  const { cursorType } = useCursor();
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;
      cursorRef.current.style.transform = `scale(${1 + speed / 1000})`;
      cursorRef.current.style.opacity = "1"; // Mostrar el cursor al volver a entrar
    };

    const handleMouseOut = (event) => {
      if (!cursorRef.current) return;
      if (event.relatedTarget === null) {
        cursorRef.current.style.opacity = "0"; // Ocultar cursor al salir de la ventana
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [speed]);

  return <div ref={cursorRef} className={`${styles.cursor} ${styles[cursorType]}`} />;
};

export default CustomCursor;
