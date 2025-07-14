// Esta é a definição oficial e única para um objeto de filme.
export interface Movie {
  id: number;
  nome: string;
  imagem: string;
  genero: string; 
  idadeIndicada: number;
  sinopse: string;
}