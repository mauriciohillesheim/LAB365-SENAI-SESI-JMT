// Ex 1: Estruturação e Roteamento
// Ex 5: Aplicação do Header (Navbar) e Footer
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// Organisms
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";

// Pages
import InicioPage from "./pages/Inicio";
import FilmesPage from "./pages/Filmes";
import DetalhesFilmesPage from "./pages/DetalhesFilmes";
import ContatoPage from "./pages/Contato";

function App() {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme || "light";

    return (
        // A classe no div principal muda de acordo com o tema
        <div className={`app ${theme}`}>
            {/* Ex 5: Header (Navbar) aplicado em todas as páginas */}
            <Navbar />
            <main>
                {/* Ex 1: Definição das rotas da aplicação */}
                <Routes>
                    <Route path="/" element={<InicioPage />} />
                    <Route path="/filmes" element={<FilmesPage />} />
                    {/* Rota dinâmica para os detalhes do filme */}
                    <Route
                        path="/filmes/:id"
                        element={<DetalhesFilmesPage />}
                    />
                    <Route path="/contato" element={<ContatoPage />} />
                </Routes>
            </main>
            {/* Ex 5: Footer aplicado em todas as páginas */}
            <Footer />
        </div>
    );
}

export default App;
