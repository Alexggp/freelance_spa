import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Aumenta el tiempo de desplazamiento para mayor suavidad
      easing: (t) => 1 - Math.pow(1 - t, 3), // Easing cúbico más suave
      smooth: true, // Activa el scroll suave
      smoothTouch: 0.2, // Reduce la sensibilidad en dispositivos táctiles
      touchMultiplier: 2, // Hace el desplazamiento más largo en móviles
      infinite: false, // Mantiene el scroll normal (cambia a true para efecto de loop)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Limpia la instancia al desmontar
    };
  }, []);

  return null;
};

export default SmoothScroll;