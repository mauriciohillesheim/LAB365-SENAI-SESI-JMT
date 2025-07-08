// Ex 3 – Ticket Online: Componente Filme
// Requisito: Criar componente de detalhes do Filme com sinopse e botão de voltar.

import { useParams, useNavigate } from 'react-router-dom';
import { mockMovies } from '../../../data/mockMovies';
import './style.css';

const MovieDetails = () => {
  // Pega o 'id' da URL (ex: /filmes/1)
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontra o filme no nosso mock de dados pelo id
  const movie = mockMovies.find((m) => m.id === parseInt(id ?? ''));

  if (!movie) {
    return <div>Filme não encontrado!</div>;
  }

  return (
    <div className="movie-details">
      <img src={movie.imagem} alt={movie.nome} className="details-image" />
      <div className="details-info">
        <h1>{movie.nome}</h1>
        <p><strong>Gênero:</strong> {movie.genero}</p>
        <p><strong>Classificação:</strong> {movie.idadeIndicada === 0 ? 'Livre' : `${movie.idadeIndicada} anos`}</p>
        <p><strong>Sinopse:</strong> {movie.sinopse}</p>
        {/* Botão para voltar para a página anterior (lista de filmes) */}
        <button onClick={() => navigate(-1)} className="btn-back">
          Voltar
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;