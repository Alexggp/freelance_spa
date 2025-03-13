import { createContext, useContext, useState } from 'react';

/**
 * ChallengeContext: Proporciona el estado de los desafíos y el control del modal.
 */
const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [challenge, setChallenge] = useState({
    lightHouse: { activated: false, clue: 'challenge.clues.lighthouse' },
    seafloor: { activated: false, clue: 'challenge.clues.seafloor' },
    abyss: { activated: false, clue: 'challenge.clues.abyss' },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Activa un desafío específico y muestra el modal.
   * @param {string} key - Clave del desafío a activar (lightHouse, seafloor, abyss).
   */
  const activateChallenge = (key) => {
    setChallenge((prev) => ({
      ...prev,
      [key]: { ...prev[key], activated: true },
    }));
    setIsModalOpen(true);
  };

  return (
    <ChallengeContext.Provider value={{ challenge, isModalOpen, setIsModalOpen, activateChallenge }}>
      {children}
    </ChallengeContext.Provider>
  );
};

/**
 * Hook para acceder al contexto de Challenge.
 */
export const useChallenge = () => useContext(ChallengeContext);
