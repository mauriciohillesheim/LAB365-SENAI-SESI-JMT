package Model;

import java.util.ArrayList;
import java.util.List;

public class Biblioteca {

    private final List<Livro> acervo;

    private static int totalBibliotecas = 0;

    public Biblioteca(){
        this.acervo = new ArrayList<>();
        totalBibliotecas++;
    }

    public void adicionarLivro(Livro Livro){
        acervo.add(Livro);
    }

    public boolean emprestarLivro(String isbn){
        for( Livro Livro : acervo){
            if (Livro.getIsbn().equals(isbn) && !Livro.isEmprestado()){
                Livro.devolver();
                return true;
            }
        }
        return false;
    }

    public static int getTotalBibliotecas(){
        return totalBibliotecas;
    }

    public List<Livro> buscarPorAutores(String... autores){
        List<Livro> resultados = new ArrayList<>();
        for (Livro Livro : acervo){
            for (String autor : autores){
                if (Livro.getAutor().equalsIgnoreCase(autor)){
                    resultados.add(Livro);
                    break;
                }
            }
        }
        return resultados;
    }

    public void exibirRelatorio(){
        System.out.println("\n=== RELATÓRIO DA BIBLIOTECA ===");
        System.out.println("Total de livros no acervo: " + acervo.size());
        System.out.println("Livros disponíveis: ");

        for( Livro livro : acervo){
            if(!livro.isEmprestado()){
                System.out.println("- " + livro.getTitulo() + " ( " + livro.getAutor() + " ) ");

            }
        }

        System.out.println("\nLivros emprestados: ");
        for (Livro livro : acervo){
            if (livro.isEmprestado()){
                System.out.println("- " + livro.getTitulo() + " ( " + livro.getAutor() + " ) ");
            }
        }

    }
}