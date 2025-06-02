import React from 'react';
import './Gnocchi.css';
import Molhos from './Molhos';

// Importando as imagens
import gnocchiBatata from '../../assets/images/gnocchi-batata.png';
import gnocchiEspinafre from '../../assets/images/gnocchi-espinafre.png';
import gnocchiCenoura from '../../assets/images/gnocchi-cenoura.png';
import gnocchiBeterraba from '../../assets/images/gnocchi-beterraba.png';

const Gnocchi = () => {
  const gnocchiItems = [
    {
      id: 1,
      nome: 'Gnocchi de Batata',
      preco: 38.90,
      imagem: gnocchiBatata,
      descricao: 'Tradicional gnocchi de batata, macio e saboroso.'
    },
    {
      id: 2,
      nome: 'Gnocchi de Espinafre',
      preco: 42.90,
      imagem: gnocchiEspinafre,
      descricao: 'Delicioso gnocchi verde com espinafre fresco.'
    },
    {
      id: 3,
      nome: 'Gnocchi de Cenoura',
      preco: 40.90,
      imagem: gnocchiCenoura,
      descricao: 'Gnocchi colorido e nutritivo com cenoura.'
    },
    {
      id: 4,
      nome: 'Gnocchi de Beterraba',
      preco: 43.90,
      imagem: gnocchiBeterraba,
      descricao: 'Gnocchi roxo com sabor suave de beterraba.'
    }
  ];

  return (
    <section className="gnocchi-section">
      <h2 className="section-title">Nossos Gnocchis</h2>
      <p className="section-description">Escolha seu gnocchi favorito e combine com um de nossos molhos especiais</p>
      
      <div className="gnocchi-grid">
        {gnocchiItems.map((item) => (
          <div className="gnocchi-card" key={item.id}>
            <div className="gnocchi-image">
              <img src={item.imagem} alt={item.nome} />
            </div>
            <div className="gnocchi-info">
              <h3>{item.nome}</h3>
              <p className="gnocchi-descricao">{item.descricao}</p>
              <p className="gnocchi-preco">R$ {item.preco.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="molhos-section">
        <h3>Escolha seu molho</h3>
        <Molhos exibirTodos={true} />
      </div>
    </section>
  );
};

export default Gnocchi;
