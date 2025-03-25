import { useEffect, useRef } from "react";
import { useCursor } from "../contexts/CursorContext";

/**
 * Hook que gestiona el tipo de cursor si el mouse está encima del elemento,
 * incluso si ha llegado ahí por scroll.
 *
 * @param {Object} options
 * @param {string|Function} options.enterType - Tipo de cursor (o función que lo devuelve) al entrar
 * @param {string|Function} options.leaveType - Tipo de cursor (o función que lo devuelve) al salir
 *
 * @example
 * const ref = useCursorOnHoverArea({
 *   enterType: () => videoRef.current?.paused ? "playVideo" : "pauseVideo",
 *   leaveType: "default"
 * });
 */
export const useCursorOnHoverArea = ({ enterType, leaveType }) => {
  const { setCursorType } = useCursor();
  const elementRef = useRef(null);
  const isOverRef = useRef(false);
  const pointerPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePointerPos = (e) => {
      pointerPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const resolveType = (type) => (typeof type === "function" ? type() : type);

    const checkCursor = () => {
      const el = elementRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const { x, y } = pointerPosRef.current;

      const isInside =
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom;

      if (isInside && !isOverRef.current) {
        setCursorType(resolveType(enterType));
        isOverRef.current = true;
      } else if (!isInside && isOverRef.current) {
        setCursorType(resolveType(leaveType));
        isOverRef.current = false;
      }

      requestAnimationFrame(checkCursor);
    };

    window.addEventListener("mousemove", updatePointerPos);
    checkCursor();

    return () => {
      window.removeEventListener("mousemove", updatePointerPos);
    };
  }, [enterType, leaveType, setCursorType]);

  return elementRef;
};
