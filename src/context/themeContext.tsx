// src/contexts/ThemeContext.tsx
import React, { createContext, useContext } from 'react';
import { theme } from '../Styles/theme';

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar o tema
export const useTheme = () => useContext(ThemeContext);