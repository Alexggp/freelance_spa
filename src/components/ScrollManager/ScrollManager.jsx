import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // Desactiva la restauración del scroll
    }
    document.documentElement.scrollTo({ top: 0, behavior: "instant" }); // Reinicio sin animación
  }, [pathname]);

  return null;
};

export default ScrollManager;
