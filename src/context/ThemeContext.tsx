import React, { createContext, useState, useContext } from 'react';

export interface ThemeContextType {
  isDarkmode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(true);

  const toggleTheme = () => {
    setIsDarkmode(!isDarkmode);
  };

  const value: ThemeContextType = {
    isDarkmode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 