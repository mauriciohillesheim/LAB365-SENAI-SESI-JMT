// Ex 5 – Ticket Online: Templates e Pages
// Requisito: [M] Inicio: Exibirá somente uma imagem da frente de um cinema.

const InicioPage = () => {
    return (
        <div className="page-container" style={{ textAlign: "center" }}>
            <h1>Bem-vindo ao TicketOnline</h1>
            <img
                src="/cinema.jpg"
                alt="Fachada de um cinema"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                }}
            />
        </div>
    );
};

export default InicioPage;
