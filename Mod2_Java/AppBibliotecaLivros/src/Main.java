import Model.Biblioteca;
public class Livro {
    private String titulo;
    private String autor;
    private boolean alugado;

    public Livro(String titulo, String autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.alugado = false;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public boolean isAlugado() {
        return alugado;
    }

    public void setAlugado(boolean alugado) {
        this.alugado = alugado;
    }

    public String getStatus() {
        return alugado ? "Alugado" : "Disponível";
    }

    @Override
    public String toString() {
        return "Livro {" +
                "Título: '" + titulo + '\'' +
                ", Autor: '" + autor + '\'' +
                ", Status: " + getStatus() +
                '}';
    }
}