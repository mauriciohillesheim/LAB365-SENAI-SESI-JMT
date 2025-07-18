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

    /**
     * Gets quantidade.
     *
     * @return the quantidade
     */
    public int getQuantidade() {
        return quantidade;
    }

    /**
     * Sets nome.
     *
     * @param nome the nome
     */
// Setters
    public void setNome(String nome) {
        this.nome = nome;
    }

    /**
     * Sets preco.
     *
     * @param preco the preco
     */
    public void setPreco(double preco) {
        this.preco = preco;
    }

    /**
     * Sets quantidade.
     *
     * @param quantidade the quantidade
     */
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    /**
     * Vender boolean.
     *
     * @param quantidadeVenda the quantidade venda
     * @return the boolean
     */
// Método para realizar venda
    public boolean vender(int quantidadeVenda) {
        if (quantidadeVenda > this.quantidade) {
            return false; // Estoque insuficiente
        }
        this.quantidade -= quantidadeVenda;
        return true; // Venda realizada com sucesso
    }

    /**
     * Repor.
     *
     * @param quantidadeReposicao the quantidade reposicao
     */
// Método para realizar reposição
    public void repor(int quantidadeReposicao) {
        this.quantidade += quantidadeReposicao;
    }

    /**
     * Gets valor total estoque.
     *
     * @return the valor total estoque
     */
// Método para calcular valor total do produto em estoque
    public double getValorTotalEstoque() {
        return this.preco * this.quantidade;
    }

    /**
     * To string string.
     *
     * @return the string
     */
// Método toString para exibição
    @Override
    public String toString() {
        return String.format("%s | Estoque: %d | Unidade: R$%.2f | Valor: R$%.2f",
                nome, quantidade, preco, getValorTotalEstoque());
    }
}
