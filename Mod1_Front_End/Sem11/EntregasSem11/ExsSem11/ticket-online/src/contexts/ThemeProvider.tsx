import { useState, useMemo, ReactNode } from 'react';
import { ThemeContext, Theme } from './ThemeContext'; // Importa o contexto e o tipo

type ThemeProviderProps = {
  children: ReactNode;
};

// Exporta APENAS o componente Provider
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};