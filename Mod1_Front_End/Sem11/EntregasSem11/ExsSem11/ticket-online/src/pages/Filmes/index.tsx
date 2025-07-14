// Ex 5 – Ticket Online: Templates e Pages
// Requisito: [M] Filmes: exibirá uma lista (mock 6 filmes) de filmes.


import MovieGrid from '../../components/organisms/MovieGrid';
import { mockMovies } from '../../data/mockMovies';

const FilmesPage = () => {
  return (
    <div className="page-container">
      <h1>Filmes em Cartaz</h1>
      <MovieGrid movies={mockMovies} />
    </div>
  );
};

export default FilmesPage;