/**
 * Componente que exibe uma lista de tipos de gnocchi disponíveis
 * 
 * @component
 * @example
 * return (
 *   <GnocchiList />
 * )
 */

import React from 'react';
import PropTypes from 'prop-types';
import './GnocchiList.css';

// Dados dos tipos de gnocchi disponíveis
const defaultGnocchiItems = [
  {
    id: 1,
    name: 'Gnocchi de Batata',
    price: 25.90,
    image: '/images/batata.jpg', // Corrigido o caminho relativo para um placeholder
    description: 'Tradicional gnocchi feito com batata'
  },
  {
    id: 2,
    name: 'Gnocchi de Espinafre',
    price: 28.50,
    image: '/images/espinafre.jpg',
    description: 'Gnocchi verde feito com espinafre fresco'
  },
  {
    id: 3,
    name: 'Gnocchi de Cenoura',
    price: 27.00,
    image: '/images/cenoura.jpg',
    description: 'Gnocchi alaranjado feito com cenouras'
  },
  {
    id: 4,
    name: 'Gnocchi de Beterraba',
    price: 29.90,
    // Corrigido o caminho relativo para um placeholder
    image: '/images/beterraba.jpg',  
    description: 'Gnocchi rosa feito com beterraba'
  }
];

/**
 * Componente GnocchiList - Exibe uma grade de tipos de gnocchi disponíveis
 * 
 * @param {Object} props - Propriedades do componente
 * @param {Array} [props.gnocchiItems] - Lista de tipos de gnocchi a serem exibidos
 * @param {string} [props.title] - Título da seção de gnocchi
 * @returns {React.Component} Componente renderizado
 */
export const GnocchiList = ({ gnocchiItems = defaultGnocchiItems, title = "Tipos de Gnocchi" }) => {
  // Função para lidar com erros de carregamento de imagem
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível';
    e.target.alt = 'Imagem indisponível';
  };

  return (
    <div className="gnocchi-container">
      <h2 className="gnocchi-title">{title}</h2>
      <div className="gnocchi-grid" role="list" aria-label="Lista de tipos de gnocchi disponíveis">
        {gnocchiItems.map((item) => (
          <div key={item.id} className="gnocchi-card" role="listitem">
            <img 
              src={item.image} 
              alt={`${item.name}`} 
              onError={handleImageError}
              className="gnocchi-image"
            />
            <h3 className="gnocchi-card-title">{item.name}</h3>
            <p className="gnocchi-card-description">{item.description}</p>
            <span className="gnocchi-price">R$ {item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Validação de props com PropTypes
GnocchiList.propTypes = {
  gnocchiItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  title: PropTypes.string
};

export default GnocchiList;
