import React from 'react';
import './Apresentacao.css';
import restaurantFacade from '../../assets/images/restaurant-facade.png';

const Apresentacao = () => {
  return (
    <section className="apresentacao">
      <div className="apresentacao-texto">
        <h2>Servindo massas há mais de 70 anos</h2>
        <p>Qualidade passada por gerações</p>
      </div>
      <div className="apresentacao-imagem">
        <img src={restaurantFacade} alt="Fachada do Mamamia Massas" />
      </div>
    </section>
  );
};

export default Apresentacao;
