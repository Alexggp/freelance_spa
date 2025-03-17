import { useEffect, useRef } from "react";

/**
 * Hook para hacer scroll automático después de un tiempo, pero cancelable si el usuario interactúa.
 *
 * @param {string} targetId - ID del elemento destino del scroll.
 * @param {number} delay - Tiempo en milisegundos antes de iniciar el scroll.
 * @param {number} duration - Duración del scroll en milisegundos.
 */
const useAutoScroll = (targetId, delay = 3000, duration = 5000) => {
  const scrollTimeout = useRef(null);
  const animationFrame = useRef(null);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const stopAutoScroll = () => {
      isUserScrolling.current = true; // Marca que el usuario ha interactuado
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };

    // Escuchar cualquier interacción del usuario
    window.addEventListener("wheel", stopAutoScroll, { passive: true });
    window.addEventListener("touchstart", stopAutoScroll, { passive: true });
    window.addEventListener("keydown", stopAutoScroll, { passive: true });

    // Iniciar el scroll automático después del retraso si el usuario no ha intervenido
    scrollTimeout.current = setTimeout(() => {
      if (!isUserScrolling.current) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) smoothScrollTo(targetElement, duration, isUserScrolling, animationFrame);
      }
    }, delay);

    return () => {
      window.removeEventListener("wheel", stopAutoScroll);
      window.removeEventListener("touchstart", stopAutoScroll);
      window.removeEventListener("keydown", stopAutoScroll);
      clearTimeout(scrollTimeout.current);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [targetId, delay, duration]);
};

/**
 * Scroll suave a un elemento específico en un tiempo determinado.
 *
 * @param {HTMLElement} targetElement - Elemento destino del scroll.
 * @param {number} duration - Duración en milisegundos.
 * @param {Object} isUserScrolling - Ref que indica si el usuario ha intervenido.
 * @param {Object} animationFrame - Ref para detener la animación si es necesario.
 */
const smoothScrollTo = (targetElement, duration, isUserScrolling, animationFrame) => {
  if (!targetElement) return;

  const startY = window.scrollY;
  const targetY = targetElement.getBoundingClientRect().top + window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    if (isUserScrolling.current) return; // DETENER SI EL USUARIO HIZO SCROLL

    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    window.scrollTo(0, startY + distance * easeInOutQuad(progress));

    if (elapsedTime < duration) {
      animationFrame.current = requestAnimationFrame(animateScroll);
    }
  };

  animationFrame.current = requestAnimationFrame(animateScroll);
};

/**
 * Easing function para un desplazamiento más natural.
 *
 * @param {number} t - Progreso de 0 a 1.
 * @returns {number} Valor suavizado.
 */
const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
};

export default useAutoScroll;
