package model;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Biblioteca {

    private final List<Livro> acervo;
    private static int totalBibliotecas = 0;

    public Biblioteca() {
        this.acervo = new ArrayList<>();
        totalBibliotecas++; // Incrementa o contador estático
    }

    // --- Métodos de Gestão de Livros ---

    public void adicionarLivro(Livro livro) {
        acervo.add(livro);
    }

    public Livro buscarLivroPorIsbn(String isbn) {
        for (Livro livro : acervo) {
            if (livro.getIsbn().equals(isbn)) {
                return livro;
            }
        }
        return null; // Retorna nulo se não encontrar
    }

    public boolean removerLivro(String isbn) {
        return acervo.removeIf(livro -> livro.getIsbn().equals(isbn));
    }

    public List<Livro> listarTodosOsLivros() {
        return new ArrayList<>(acervo); // Retorna uma cópia para proteger o acervo original
    }

    // --- Métodos de Gestão de Empréstimos ---

    public boolean emprestarLivro(String isbn) {
        Livro livro = buscarLivroPorIsbn(isbn);
        if (livro != null && !livro.isEmprestado()) {
            livro.emprestar(); // Chama a função pronta da classe Livro
            return true;
        }
        return false;
    }

    public boolean devolverLivro(String isbn) {
        Livro livro = buscarLivroPorIsbn(isbn);
        if (livro != null && livro.isEmprestado()) {
            livro.devolver(); // Chama a função pronta da classe Livro
            return true;
        }
        return false;
    }

    public List<Livro> listarLivrosDisponiveis() {
        // Usando a API de Streams para um código mais limpo e moderno
        return acervo.stream()
                .filter(livro -> !livro.isEmprestado())
                .collect(Collectors.toList());
    }

    public List<Livro> listarLivrosEmprestados() {
        return acervo.stream()
                .filter(Livro::isEmprestado) // Outra forma de escrever a mesma lógica
                .collect(Collectors.toList());
    }

    // --- Métodos de Relatórios e Consultas ---

    public List<Livro> buscarLivrosPorAutor(String autor) {
        return acervo.stream()
                .filter(livro -> livro.getAutor().equalsIgnoreCase(autor))
                .collect(Collectors.toList());
    }

    public void exibirEstatisticasEmprestimos() {
        long totalEmprestados = listarLivrosEmprestados().size();
        long totalDisponiveis = listarLivrosDisponiveis().size();
        System.out.println("\n--- Estatísticas de Empréstimos ---");
        System.out.println("Livros Emprestados: " + totalEmprestados);
        System.out.println("Livros Disponíveis: " + totalDisponiveis);
        System.out.println("------------------------------------");
    }

    // --- Métodos de Administração do Sistema ---

    public int getTotalDeLivrosCadastrados() {
        return acervo.size();
    }

    public static int getTotalBibliotecas() {
        return totalBibliotecas;
    }
}
