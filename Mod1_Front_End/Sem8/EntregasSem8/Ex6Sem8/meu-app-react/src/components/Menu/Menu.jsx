import React from 'react';
import './Menu.css';

const Menu = ({ secaoAtiva, atualizarSecao }) => {
  return (
    <nav className="menu">
      <div className="menu-logo">
        <h1>Mamamia Massas</h1>
      </div>
      <ul className="menu-items">
        <li 
          className={secaoAtiva === 'inicio' ? 'active' : ''} 
          onClick={() => atualizarSecao('inicio')}
        >
          Início
        </li>
        <li 
          className={secaoAtiva === 'gnocchi' ? 'active' : ''} 
          onClick={() => atualizarSecao('gnocchi')}
        >
          Gnocchi
        </li>
        <li 
          className={secaoAtiva === 'pastas' ? 'active' : ''} 
          onClick={() => atualizarSecao('pastas')}
        >
          Pastas
        </li>
        <li 
          className={secaoAtiva === 'bebidas' ? 'active' : ''} 
          onClick={() => atualizarSecao('bebidas')}
        >
          Bebidas
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
