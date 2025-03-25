import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import { useCursor } from "../../contexts/CursorContext";

const ScrollController = () => {
  const { pathname } = useLocation();
  const { setCursorType } = useCursor();

  useEffect(() => {
    setCursorType("default"); // Restaura el cursor al cambiar de ruta
    // Desactiva la restauración automática del navegador
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Reinicia el scroll inmediatamente al cambiar de ruta
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Configura Lenis para scroll ultra fluido
    const lenis = new Lenis({
      duration: 1.2, // Mayor duración para suavidad
      easing: (t) => 1 - Math.pow(1 - t, 3), // Easing cúbico
      smooth: true,
      smoothTouch: 0.2,
      touchMultiplier: 2,
    });

    // Loop de animación para Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Limpia la instancia de Lenis al desmontar
    };
  }, [pathname]);

  return null;
};

export default ScrollController;
