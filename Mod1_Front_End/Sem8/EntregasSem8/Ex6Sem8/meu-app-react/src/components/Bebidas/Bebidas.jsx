import React from 'react';
import './Bebidas.css';

const Bebidas = () => {
  const categoriasBebidas = [
    {
      id: 1,
      nome: 'Água',
      opcoes: [
        {
          id: 1,
          nome: 'Água Mineral',
          preco: 5.90
        }
      ]
    },
    {
      id: 2,
      nome: 'Refrigerante',
      opcoes: [
        {
          id: 1,
          nome: 'Coca-Cola',
          preco: 7.50
        },
        {
          id: 2,
          nome: 'Guaraná',
          preco: 7.00
        },
        {
          id: 3,
          nome: 'Sprite',
          preco: 7.00
        }
      ]
    },
    {
      id: 3,
      nome: 'Sucos',
      opcoes: [
        {
          id: 1,
          nome: 'Morango',
          preco: 9.90
        },
        {
          id: 2,
          nome: 'Laranja',
          preco: 8.90
        },
        {
          id: 3,
          nome: 'Uva',
          preco: 9.50
        }
      ]
    }
  ];

  return (
    <section className="bebidas-section">
      <h2 className="section-title">Nossas Bebidas</h2>
      <p className="section-description">Escolha a bebida perfeita para acompanhar sua refeição</p>
      
      <div className="bebidas-container">
        {categoriasBebidas.map((categoria) => (
          <div className="categoria-bebida" key={categoria.id}>
            <h3 className="categoria-titulo">{categoria.nome}</h3>
            <div className="bebidas-lista">
              {categoria.opcoes.map((bebida) => (
                <div className="bebida-item" key={bebida.id}>
                  <div className="bebida-info">
                    <h4 className="bebida-nome">{bebida.nome}</h4>
                    <p className="bebida-preco">R$ {bebida.preco.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bebidas;
