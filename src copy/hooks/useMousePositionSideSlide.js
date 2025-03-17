import { useRef, useEffect } from "react";

const calculateOffsetX = (el, xPosition) => {
  const xPercent = xPosition / window.innerWidth;
  const realWidth = el.clientWidth -  window.innerWidth;
  return (realWidth * xPercent);

}

export function useMousePositionSideSlide() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      
      const onMouseMove = e => {
 
        const scrollX = calculateOffsetX(el, e.x);
        el.style.left = `${-scrollX}px`
      };
      document.addEventListener("mousemove", onMouseMove);
      return () => document.removeEventListener("mousemove", onMouseMove);
    }
  }, []);
  return elRef;
}