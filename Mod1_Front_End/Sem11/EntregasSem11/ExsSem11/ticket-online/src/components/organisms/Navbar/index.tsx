// Ex 2 – Ticket Online: Navbar e Temas
// Requisito: Criar Menu e controle de tema claro/escuro com ícone.

// Ex 2 – Ticket Online: Navbar e Temas
// Requisito: Criar Menu e controle de tema claro/escuro

import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme'; // <-- MUDANÇA PRINCIPAL: Importa o hook customizado
import './style.css';

export const Navbar = () => {
  // Acessa o contexto de forma muito mais limpa usando o hook
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-brand">TicketOnline</div>
      <nav className="navbar-links">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/filmes">Filmes</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
      {/* A lógica do botão continua a mesma, usando os valores do hook */}
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Mudar tema">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

// Adicionado export nominal para consistência
export default Navbar;