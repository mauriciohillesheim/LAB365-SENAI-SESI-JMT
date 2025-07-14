// Importa a interface central para garantir que os dados sigam o padrão
import { Movie } from '../types/movie';
// Ex 3 – Ticket Online: Componente Filme
// Dados simulados para alimentar o grid de filmes.
export const mockMovies: Movie[] = [
    {
        id: 1,
        nome: 'Duna: Parte 2',
        imagem: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
        genero: 'Ficção Científica',
        idadeIndicada: 14,
        sinopse: 'Paul Atredes se une a Chain e aos Freme em uma guerra de vingança contra os conspiradores que destruíram sua família.'
    },

    {
        id: 2,

        nome: 'Oppenheimer',
        imagem:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gWVzseWiiADVflmmHZrB9O.jpg',
        genero: 'Drama Histórico',
        idadeIndicada: 16,
        sinopse: 'A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.'
    },
    {

        id: 3,
        nome: 'Elementos',
        imagem: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
        genero: 'Animação',
        idadeIndicada: 0, // Livre
        sinopse: 'Em uma cidade onde os habitantes de fogo, água, terra e ar vivem juntos, uma jovem de fogo e um rapaz de água descobrem algo elementar: o quanto eles realmente têm em comum.'
    },
    // ... adicione mais 3 filmes para completar os 6
];
