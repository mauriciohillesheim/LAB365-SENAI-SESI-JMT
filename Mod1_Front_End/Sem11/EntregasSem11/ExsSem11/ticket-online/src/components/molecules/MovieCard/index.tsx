// Ex 3 – Ticket Online: Componente Filme
// Requisito: Criar componente de Filmes com nome, imagem, gênero, idade e botão.

import { Link } from "react-router-dom";
import "./style.css"; // CSS para o card

interface Movie {
    id: number;
    nome: string;
    imagem: string;
    genero: string;
    idadeIndicada: number;
}

interface MovieCardProps {
    movie: Movie;
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
