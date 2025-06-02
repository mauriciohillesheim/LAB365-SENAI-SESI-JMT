/**
 * Componente principal da aplicação
 * Responsável por renderizar os componentes GnocchiList e SauceList
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 */

import React from 'react';
import PropTypes from 'prop-types';
import { GnocchiList } from "./components/GnocchiList/GnocchiList";
import { SauceList } from "./components/SauceList/SauceList";
import './App.css';

/**
 * Componente App - Componente principal que renderiza a aplicação
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} [props.title] - Título principal da aplicação
 * @returns {React.Component} Componente renderizado
 */
function App({ title = "Menu de Gnocchi" }) {
  return (
    <div className="container">
      <header className="app-header">
        <h1>{title}</h1>
      </header>
      <main>
        <section aria-labelledby="gnocchi-section">
          <GnocchiList />
        </section>
        <section aria-labelledby="sauce-section">
          <SauceList />
        </section>
      </main>
    </div>
  );
}

// Validação de props com PropTypes
App.propTypes = {
  title: PropTypes.string
};

export default App;
