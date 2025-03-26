import { useMemo } from 'react';

/**
 * Hook que detecta si el dispositivo es iOS, incluyendo iPadOS modernos
 *
 * @returns {boolean} `true` si es un dispositivo iOS
 */
const useIsIos = () => {
  return useMemo(() => {
    if (typeof navigator === 'undefined' || typeof window === 'undefined') return false;

    const ua = navigator.userAgent || navigator.vendor || window.opera;

    // iPhone, iPod o iPad tradicional
    const isOldIOS = /iPad|iPhone|iPod/.test(ua);

    // iPadOS modernos que se identifican como Mac pero tienen pantalla táctil
    const isModernIpad = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    return isOldIOS || isModernIpad;
  }, []);
};

export default useIsIos;
