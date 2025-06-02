/**
 * Componente que exibe uma lista de molhos disponíveis
 *
 * @component
 * @example
 * return (
 *   <SauceList />
 * )
 */

import React from "react";
import PropTypes from "prop-types";
import "./SauceList.css";

// Dados dos molhos disponíveis
const defaultSauceItems = [
  {
    id: 1,
    name: "Alla Puttanesca",
    description: "Molho picante com azeitonas, alcaparras e anchovas",
    image: "/images/puttanesca.jpg", // Adicione o caminho da imagem
  },
  {
    id: 2,
    name: "Al Pesto di Basilico",
    description: "Tradicional molho verde de manjericão, pinoli e queijo",
    image: "/images/pesto.jpg", // Adicione o caminho da imagem
  },
  {
    id: 3,
    name: "Cacio e Pepe",
    description: "Molho cremoso de queijo pecorino e pimenta preta",
    image: "/images/cacio.jpg", // Adicione o caminho da imagem
  },
  {
    id: 4,
    name: "Alla Matriciana",
    description: "Molho com guanciale, tomate e pecorino",
    image: "/images/matriciana.jpg", // Adicione o caminho da imagem
  },
];

/**
 * Componente SauceList - Exibe uma lista de molhos disponíveis
 *
 * @param {Object} props - Propriedades do componente
 * @param {Array} [props.sauceItems] - Lista de molhos a serem exibidos
 * @param {string} [props.title] - Título da seção de molhos
 * @returns {React.Component} Componente renderizado
 */
export const SauceList = ({
  sauceItems = defaultSauceItems,
  title = "Molhos Disponíveis",
}) => {
  return (
    <ul className="sauce-list" aria-label="Lista de molhos disponíveis">
      {sauceItems.map((item) => (
        <li key={item.id} className="sauce-item">
          {item.image && (
            <img
              src={item.image}
              alt={`Molho ${item.name}`}
              className="sauce-item-image"
              onError={(e) => {
                e.target.src = "/images/default-sauce.jpg"; // Imagem padrão em caso de erro
                e.target.alt = "Imagem indisponível";
              }}
            />
          )}
          <div className="sauce-item-content">
            <h3 className="sauce-item-title">{item.name}</h3>
            <p className="sauce-item-description">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Validação de props com PropTypes
SauceList.propTypes = {
  sauceItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string // Propriedade opcional para a imagem
    })
  ),
  title: PropTypes.string
};

export default SauceList;
