import { useRef, useEffect } from "react";
import useScreenSize  from "./useScreenSize";

const calculateOffsetX = (el, xPosition) => {
  const xPercent = xPosition / window.innerWidth;
  const realWidth = el.clientWidth - window.innerWidth;
  return realWidth * xPercent;
};

export function useMousePositionSideSlide() {
  const elRef = useRef();
  const { isDesktop } = useScreenSize(); // Usa tu hook para detectar el dispositivo

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const onMouseMove = (e) => {
      const scrollX = calculateOffsetX(el, e.clientX);
      el.style.left = `${-scrollX}px`;
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]; // Primer dedo en pantalla
        const scrollX = calculateOffsetX(el, touch.clientX);
        el.style.left = `${-scrollX}px`;
      }
    };

    if (isDesktop) {
      document.addEventListener("mousemove", onMouseMove);
      return () => document.removeEventListener("mousemove", onMouseMove);
    } else {
      document.addEventListener("touchmove", onTouchMove);
      return () => document.removeEventListener("touchmove", onTouchMove);
    }
  }, [isDesktop]); // Se actualiza si cambia el dispositivo

  return elRef;
}
