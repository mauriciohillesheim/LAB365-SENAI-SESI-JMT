// Ex 5 – Ticket Online: Templates e Pages
// Requisito: Crie um footer simples.

import './style.css'; // CSS para o footer

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} TicketOnline. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;