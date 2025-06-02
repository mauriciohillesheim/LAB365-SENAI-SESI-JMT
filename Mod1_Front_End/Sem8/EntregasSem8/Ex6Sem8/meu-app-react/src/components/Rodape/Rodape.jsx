import React from 'react';
import './Rodape.css';

// Importando as imagens dos ícones
import iconFacebook from '../../assets/images/icon-facebook.png';
import iconInstagram from '../../assets/images/icon-instagram.png';
import iconTwitter from '../../assets/images/icon-twitter.png';
import iconPinterest from '../../assets/images/icon-pinterest.png';

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        <div className="rodape-redes">
          <h3>Siga-nos</h3>
          <div className="rodape-icones">
            <a href="/" aria-label="Facebook">
              <img src={iconFacebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="/" aria-label="Instagram">
              <img src={iconInstagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="/" aria-label="Twitter">
              <img src={iconTwitter} alt="Twitter" className="social-icon" />
            </a>
            <a href="/" aria-label="Pinterest">
              <img src={iconPinterest} alt="Pinterest" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="rodape-endereco">
          <h3>Visite-nos</h3>
          <address>
            Rua das Massas, 123<br />
            Bairro Italiano<br />
            Joinville - SC<br />
            Tel: (47) 99234-9981
          </address>
        </div>
        <div className="rodape-horario">
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sexta: 11h às 23h</p>
          <p>Sábados e Domingos: 11h às 00h</p>
        </div>
      </div>
      <div className="rodape-copyright">
        <p>&copy; 2025 Mauricio Mamamia Massas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;
