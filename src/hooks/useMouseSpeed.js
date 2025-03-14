import { useState, useEffect, useRef } from "react";

/**
 * Hook para calcular la velocidad del ratón en píxeles por segundo.
 * Mide la distancia recorrida en 500ms y calcula la velocidad.
 *
 * @returns {number} Velocidad en píxeles por segundo (px/s).
 */
const useMouseSpeed = () => {
  const [speed, setSpeed] = useState(0);
  const lastMousePos = useRef({ x: -1, y: -1 });
  const mouseTravel = useRef(0); // Distancia recorrida acumulada
  const lastUpdateTime = useRef(Date.now());

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { x, y } = lastMousePos.current;
      if (x > -1 && y > -1) {
        mouseTravel.current += Math.max(
          Math.abs(event.clientX - x),
          Math.abs(event.clientY - y)
        );
      }
      lastMousePos.current = { x: event.clientX, y: event.clientY };
    };

    const updateSpeed = () => {
      const now = Date.now();
      const deltaT = (now - lastUpdateTime.current) / 1000; // Convertimos a segundos
      const speed = mouseTravel.current / deltaT; // px/s
      setSpeed(speed);

      // Reiniciamos los valores para la siguiente medición
      mouseTravel.current = 0;
      lastUpdateTime.current = now;
    };

    window.addEventListener("mousemove", handleMouseMove);
    const interval = setInterval(updateSpeed, 500); // Actualizamos la velocidad cada 500ms

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return speed;
};

export default useMouseSpeed;
