// Ex 3 – Ticket Online: Componente Filme
// Requisito: Criar componente de Filmes com nome, imagem, gênero, idade e botão.

import { Link } from "react-router-dom";
import { Movie } from "../../../types/movie"; // <-- MUDANÇA: Importa o tipo central
import "./style.css"; // CSS para o card

// A interface Movie local foi removida daqui.

interface MovieCardProps {
    movie: Movie; // <-- Agora usa o tipo importado, garantindo consistência
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
            <img
                src={movie.imagem}
                alt={`Pôster do filme ${movie.nome}`}
                className="movie-card-image"
            />
            <div className="movie-card-body">
                <h3>{movie.nome}</h3>
                <p>Gênero: {movie.genero}</p>
                <p>
                    Classificação:{" "}
                    {movie.idadeIndicada === 0
                        ? "Livre"
                        : `${movie.idadeIndicada} anos`}
                </p>
                {/* O botão é um Link que leva para a página de detalhes daquele filme específico */}
                <Link to={`/filmes/${movie.id}`} className="btn-details">
                    Ver mais informações
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;