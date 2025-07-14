// Ex 3 – Ticket Online: Componente Filme
// Requisito: Criar Grid de filmes.

import { Movie } from '../../../types/movie'; // <-- IMPORTA O TIPO CENTRAL
import MovieCard from '../../molecules/MovieCard';
import './style.css';

// A interface Movie local foi removida daqui.

interface MovieGridProps {
  movies: Movie[]; // <-- Usa o tipo importado, garantindo consistência
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