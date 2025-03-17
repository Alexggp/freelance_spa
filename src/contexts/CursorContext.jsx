import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

/**
 * Proveedor del CursorContext que permite modificar el estado del cursor globalmente.
 */
export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState("default");

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};

/**
 * Hook personalizado para acceder al contexto del cursor.
 */
export const useCursor = () => useContext(CursorContext);
