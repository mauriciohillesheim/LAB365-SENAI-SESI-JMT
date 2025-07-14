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
        sinopse: 'Paul Atreides se une a Chani e aos Fremen em uma guerra de vingança contra os conspiradores que destruíram sua família.'
    },
    {
        id: 2,
        nome: 'Oppenheimer',
        imagem: 'https://tse2.mm.bing.net/th/id/OIP.bSUhliAfe6lAweLb3Lx72AAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        genero: 'Drama',
        idadeIndicada: 16,
        sinopse: 'A história do físico americano J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.'
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