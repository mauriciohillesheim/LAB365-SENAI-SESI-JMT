package model;

public class Produto {
    private String nome;
    private double preco;
    private int quantidade;

    // Construtor
    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Getters
    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public int getQuantidade() {
        return quantidade;
    }

    // Setters
    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    // Método para realizar venda
    public boolean vender(int quantidadeVenda) {
        if (quantidadeVenda > this.quantidade) {
            return false; // Estoque insuficiente
        }
        this.quantidade -= quantidadeVenda;
        return true; // Venda realizada com sucesso
    }

    // Método para realizar reposição
    public void repor(int quantidadeReposicao) {
        this.quantidade += quantidadeReposicao;
    }

    // Método para calcular valor total do produto em estoque
    public double getValorTotalEstoque() {
        return this.preco * this.quantidade;
    }

    // Método toString para exibição
    @Override
    public String toString() {
        return String.format("%s | Estoque: %d | Unidade: R$%.2f | Valor: R$%.2f",
                nome, quantidade, preco, getValorTotalEstoque());
    }
}
