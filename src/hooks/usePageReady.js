import { useEffect, useState } from 'react';

/**
 * Hook que espera hasta que todos los recursos de la página estén completamente cargados
 * (incluye imágenes, vídeos, fonts... todo)
 *
 * @returns {boolean} `true` si la página ha terminado de cargar
 */
const usePageReady = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setReady(true);
      return;
    }

    const onLoad = () => setReady(true);
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return ready;
};

export default usePageReady;
