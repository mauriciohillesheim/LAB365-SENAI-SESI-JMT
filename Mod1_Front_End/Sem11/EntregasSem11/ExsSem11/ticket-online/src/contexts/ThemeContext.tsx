// Ex 2 – Ticket Online: Navbar e Temas
// Requisito: Criar Tema Claro/Escuro usando ContextAPI.

import { createContext } from 'react';

// Tipagem mais específica para o tema
export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Apenas a criação e exportação do contexto
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);