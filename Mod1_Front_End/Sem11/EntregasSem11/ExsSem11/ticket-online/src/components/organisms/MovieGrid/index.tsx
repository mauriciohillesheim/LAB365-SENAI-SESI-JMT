// Ex 3 – Ticket Online: Componente Filme
// Requisito: Criar Grid de filmes.

import { Movie } from "../../../types/movie";      // <-- MUDANÇA: Importa o tipo central
import MovieCard from "../../molecules/MovieCard";
import "./style.css";                              // CSS para o grid

// A interface Movie local foi removida daqui.

interface MovieGridProps {
    movies: Movie[]; // <-- Agora usa o tipo importado, garantindo consistência
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