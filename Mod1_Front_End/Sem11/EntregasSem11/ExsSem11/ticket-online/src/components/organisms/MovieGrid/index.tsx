// Ex 3 – Ticket Online: Componente Filme
// Requisito: Criar Grid de filmes.

import MovieCard from "../../molecules/MovieCard";
import "./style.css"; // CSS para o grid

interface Movie {
    id: number;
    nome: string;
    imagem: string;
    gênero: string;
    idadeIndicada: number;
    // Adicione outras propriedades conforme necessário, por exemplo: title, poster, etc.
}

interface MovieGridProps {
    movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
    return (
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieGrid;
