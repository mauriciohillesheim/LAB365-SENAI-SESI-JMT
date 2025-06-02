import React, { useState } from 'react';
import './Cardapio.css';
import Menu from '../Menu/Menu';
import Apresentacao from '../Apresentacao/Apresentacao';
import Gnocchi from '../Gnocchi/Gnocchi';
import Pastas from '../Pastas/Pastas';
import Bebidas from '../Bebidas/Bebidas';
import Rodape from '../Rodape/Rodape';

const Cardapio = () => {
  const [secaoAtiva, setSecaoAtiva] = useState('inicio');

  // Função para renderizar a seção ativa
  const renderizarSecao = () => {
    switch (secaoAtiva) {
      case 'inicio':
        return <Apresentacao />;
      case 'gnocchi':
        return <Gnocchi />;
      case 'pastas':
        return <Pastas />;
      case 'bebidas':
        return <Bebidas />;
      default:
        return <Apresentacao />;
    }
  };

  // Função para atualizar a seção ativa
  const atualizarSecao = (secao) => {
    setSecaoAtiva(secao);
  };

  return (
    <div className="cardapio-container">
      <Menu secaoAtiva={secaoAtiva} atualizarSecao={atualizarSecao} />
      <main className="cardapio-conteudo">
        {renderizarSecao()}
      </main>
      <Rodape />
    </div>
  );
};

export default Cardapio;
