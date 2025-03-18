import { useState, useEffect } from 'react';

/**
 * Hook para obtener el tamaño de pantalla y clasificarlo en mobile, tablet, desktop pequeño o grande.
 * 
 * @returns {Object} Estado de la pantalla con el tamaño categorizado y booleanos de utilidad.
 * @example
 * const { screen, isMobile, isTablet, isDesktop } = useScreenSize();
 */
const useScreenSize = () => {
  const getScreenSize = () => {
    const width = window.innerWidth;

    if (width < 768) return 'mobile';
    if (width >= 768 && width < 1024) return 'tablet';
    if (width >= 1024 && width < 1440) return 'desktopPequeño';
    return 'desktopGrande';
  };

  const [screen, setScreen] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => setScreen(getScreenSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    screen,
    isMobile: screen === 'mobile',
    isTablet: screen === 'tablet',
    isDesktop: screen === 'desktopPequeño' || screen === 'desktopGrande',
  };
};

export default useScreenSize;
