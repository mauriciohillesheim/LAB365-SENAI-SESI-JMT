import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Importa o contexto

// Exporta APENAS o hook
export const useTheme = () => {
    const context = useContext(ThemeContext);

    // Garante que o hook só seja usado dentro de um ThemeProvider
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};