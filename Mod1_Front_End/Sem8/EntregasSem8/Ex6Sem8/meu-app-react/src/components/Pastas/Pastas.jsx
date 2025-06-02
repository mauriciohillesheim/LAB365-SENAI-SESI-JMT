import React from 'react';
import './Pastas.css';
import Molhos from '../Gnocchi/Molhos';

// Importando as imagens
import espaguete from '../../assets/images/espaguete.png';
import tagliatelle from '../../assets/images/tagliatelle.png';
import fettuccine from '../../assets/images/fettuccine.png';
import penne from '../../assets/images/penne.png';
import rigatoni from '../../assets/images/rigatoni.png';
import pappardelle from '../../assets/images/pappardelle.png';

const Pastas = () => {
  const pastasItems = [
    {
      id: 1,
      nome: 'Espaguete',
      preco: 36.90,
      imagem: espaguete,
      descricao: 'Clássico espaguete italiano, fino e delicado.',
      molhosPermitidos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']
    },
    {
      id: 2,
      nome: 'Tagliatelle',
      preco: 39.90,
      imagem: tagliatelle,
      descricao: 'Massa em formato de fitas largas e planas.',
      molhosPermitidos: ['Alla Puttanesca', 'Alla Matriciana']
    },
    {
      id: 3,
      nome: 'Fettuccine',
      preco: 38.90,
      imagem: fettuccine,
      descricao: 'Massa em formato de fitas, perfeita para molhos cremosos.',
      molhosPermitidos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe']
    },
    {
      id: 4,
      nome: 'Penne',
      preco: 35.90,
      imagem: penne,
      descricao: 'Massa em formato de tubos diagonais.',
      molhosPermitidos: ['Alla Puttanesca', 'Cacio e Pepe']
    },
    {
      id: 5,
      nome: 'Rigatoni',
      preco: 37.90,
      imagem: rigatoni,
      descricao: 'Massa em formato de tubos com estrias.',
      molhosPermitidos: ['Alla Matriciana']
    },
    {
      id: 6,
      nome: 'Pappardelle',
      preco: 42.90,
      imagem: pappardelle,
      descricao: 'Massa em formato de fitas muito largas.',
      molhosPermitidos: ['Alla Puttanesca', 'Alla Matriciana']
    }
  ];

  return (
    <section className="pastas-section">
      <h2 className="section-title">Nossas Pastas</h2>
      <p className="section-description">Escolha sua massa favorita e combine com um de nossos molhos especiais</p>
      
      <div className="pastas-grid">
        {pastasItems.map((item) => (
          <div className="pasta-card" key={item.id}>
            <div className="pasta-image">
              <img src={item.imagem} alt={item.nome} />
            </div>
            <div className="pasta-info">
              <h3>{item.nome}</h3>
              <p className="pasta-descricao">{item.descricao}</p>
              <p className="pasta-preco">R$ {item.preco.toFixed(2)}</p>
              
              <div className="pasta-molhos">
                <h4>Molhos permitidos:</h4>
                <Molhos molhosSelecionados={item.molhosPermitidos} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pastas;
