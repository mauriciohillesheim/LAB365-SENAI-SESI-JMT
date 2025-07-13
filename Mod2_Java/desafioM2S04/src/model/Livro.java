package model;

public class Livro {
    // Atributos privados para garantir o encapsulamento
    private String isbn;
    private String titulo;
    private String autor;
    private boolean emprestado;

    // Construtor para criar um novo livro
    public Livro(String isbn, String titulo, String autor) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false; // Todo livro novo começa como disponível
    }

    // --- Getters (para acessar os dados) ---
    public String getIsbn() {
        return isbn;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getAutor() {
        return autor;
    }

    public boolean isEmprestado() {
        return emprestado;
    }

    // --- Setters (para modificar os dados) ---
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    // --- Métodos de Ação ---
    public void emprestar() {
        this.emprestado = true;
    }

    public void devolver() {
        this.emprestado = false;
    }

    // Sobrescrevendo o método toString para uma exibição formatada e legível
    @Override
    public String toString() {
        return "Livro [ISBN: " + isbn +
                ", Título: '" + titulo + '\'' +
                ", Autor: '" + autor + '\'' +
                ", Status: " + (emprestado ? "Emprestado" : "Disponível") + "]";
    }
}
