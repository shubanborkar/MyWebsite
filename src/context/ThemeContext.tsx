import React, { createContext, useState, useContext } from 'react';

interface ThemeContextType {
  isDarkmode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(true);

  const toggleTheme = () => {
    setIsDarkmode(!isDarkmode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 