import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Hook para aplicar un efecto de parallax a un elemento según el movimiento del mouse.
 * @param {boolean} isActive - Indica si el efecto debe estar activo.
 * @param {number} intensity - Intensidad del movimiento (por defecto 50).
 * @returns {React.RefObject} - Referencia del elemento con el efecto de parallax.
 * @example
 * const ref = useMouseParallax(isActive, 40);
 * <div ref={ref}>Contenido</div>
 */
export const useMouseParallax = (isActive, intensity = 50) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!isActive || !ref.current) return;

    const handleMouseMove = (e) => {
      const bounds = ref.current.getBoundingClientRect();
      const relX = e.clientX - bounds.left;
      const relY = e.clientY - bounds.top;
      const moveX = (relX - bounds.width / 2) / bounds.width;
      const moveY = (relY - bounds.height / 2) / bounds.height;

      gsap.to(ref.current, {
        x: moveX * intensity,
        y: moveY * intensity,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isActive, intensity]);

  return ref;
};
