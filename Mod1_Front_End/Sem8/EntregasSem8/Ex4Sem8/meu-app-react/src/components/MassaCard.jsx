import React, { useState } from 'react';
import { getMolhosPermitidos } from '../data/massasMolhos';
import MolhoComponent from './MolhoComponent';
import './MassaCard.css';

const MassaCard = ({ massa }) => {
  const molhosPermitidos = getMolhosPermitidos(massa.id);
  const [molhoSelecionado, setMolhoSelecionado] = useState(null);

  const handleMolhoClick = (molhoId) => {
    setMolhoSelecionado(molhoId === molhoSelecionado ? null : molhoId);
  };

  return (
    <div className="massa-card">
      <div className="massa-imagem">
        <img src={massa.imagem} alt={massa.nome} />
      </div>
      <div className="massa-info">
        <h3 className="massa-nome">{massa.nome}</h3>
        <p className="massa-descricao">{massa.descricao}</p>
        <div className="massa-valor">
          {new Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
          }).format(massa.valor)}
        </div>
        
        <div className="massa-molhos">
          <h4>Molhos Permitidos:</h4>
          <div className="molhos-container">
            {molhosPermitidos.map(molho => (
              <MolhoComponent 
                key={molho.id} 
                molho={molho} 
                selecionado={molhoSelecionado === molho.id}
                onClick={() => handleMolhoClick(molho.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassaCard;
