import React from 'react';
import { massas } from "./data/massasMolhos.js";
import MassasGrid from './components/MassasGrid.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Nossas Massas</h1>
        <p>Escolha sua massa favorita e combine com os molhos disponíveis</p>
      </header>
      <main>
        <MassasGrid massas={massas} />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} - Restaurante Italiano</p>
      </footer>
    </div>
  );
}

export default App;
