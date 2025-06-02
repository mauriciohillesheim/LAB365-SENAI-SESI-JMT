import React from 'react';
import './Molhos.css';

const Molhos = ({ molhosSelecionados, exibirTodos = false }) => {
  const todosMolhos = [
    'Alla Puttanesca',
    'Al Pesto di Basilico',
    'Cacio e Pepe',
    'Alla Matriciana'
  ];

  // Se exibirTodos for true, mostra todos os molhos
  // Caso contrário, mostra apenas os molhos selecionados
  const molhosParaExibir = exibirTodos ? todosMolhos : 
    todosMolhos.filter(molho => molhosSelecionados?.includes(molho));

  return (
    <div className="molhos-container">
      <h3>Molhos</h3>
      <ul className="molhos-lista">
        {molhosParaExibir.map((molho, index) => (
          <li key={index}>{molho}</li>
        ))}
      </ul>
    </div>
  );
};

export default Molhos;
