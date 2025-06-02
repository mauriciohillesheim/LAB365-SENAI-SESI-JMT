import React from 'react';
import MassaCard from './MassaCard';
import './MassasGrid.css';

const MassasGrid = ({ massas }) => {
  return (
    <div className="massas-container">
      <div className="massas-grid">
        {massas.map(massa => (
          <div key={massa.id} className="massa-grid-item">
            <MassaCard massa={massa} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MassasGrid;
