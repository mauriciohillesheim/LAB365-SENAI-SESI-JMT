import React from 'react';
import './MolhoComponent.css';

const MolhoComponent = ({ molho, selecionado, onClick }) => {
  return (
    <div 
      className={`molho-component ${selecionado ? 'selecionado' : ''}`}
      onClick={onClick}
    >
      <div className="molho-imagem">
        <img src={molho.imagem} alt={molho.nome} />
      </div>
      <div className="molho-info">
        <h4 className="molho-nome">{molho.nome}</h4>
        <p className="molho-descricao">{molho.descricao}</p>
      </div>
    </div>
  );
};

export default MolhoComponent;
