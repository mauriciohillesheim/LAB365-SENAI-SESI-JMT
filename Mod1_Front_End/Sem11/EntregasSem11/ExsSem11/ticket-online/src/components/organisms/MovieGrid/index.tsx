// Ex 3 – Ticket Online: Componente Filme
// Requisito: Criar Grid de filmes.

import { Movie } from '../../../types/movie'; // <-- PASSO 1: IMPORTAR O TIPO CENTRAL
import MovieCard from '../../molecules/MovieCard';
import './style.css';

// PASSO 2: GARANTA QUE NÃO HÁ NENHUMA "interface Movie {...}" DEFINIDA AQUI

interface MovieGridProps {
  movies: Movie[]; // <-- PASSO 3: USAR O TIPO IMPORTADO
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