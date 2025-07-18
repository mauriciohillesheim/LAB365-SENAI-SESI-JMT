package service;

import java.util.ArrayList;
import java.util.List;
import model.Produto;

public class GerenciadorDeEstoque {
    private List<Produto> produtos;

    // Construtor
    public GerenciadorDeEstoque() {
        this.produtos = new ArrayList<>();
        inicializarProdutos();
    }

    // Método para inicializar os produtos
    private void inicializarProdutos() {
        produtos.add(new Produto("Tomate", 3.99, 100));
        produtos.add(new Produto("Batata", 2.49, 200));
        produtos.add(new Produto("Cebola", 1.99, 150));
    }

    // Método para buscar produto por nome
    public Produto buscarProduto(String nome) {
        for (Produto produto : produtos) {
            if (produto.getNome().equalsIgnoreCase(nome)) {
                return produto;
            }
        }
        return null; // Produto não encontrado
    }

    // Método para realizar venda com validação
    public boolean realizarVenda(String nomeProduto, int quantidade) {
        Produto produto = buscarProduto(nomeProduto);

        if (produto == null) {
            System.out.println("Produto inválido.");
            return false;
        }

        if (quantidade > produto.getQuantidade()) {
            System.out.println("Quantidade insuficiente em estoque. Disponível: " + produto.getQuantidade());
            return false;
        }

        produto.vender(quantidade);
        System.out.println("Venda de " + quantidade + " unidades de " + produto.getNome() + " realizada com sucesso.");
        return true;
    }

    /**
     * Realizar reposicao boolean.
     *
     * @param nomeProduto the nome produto
     * @param quantidade  the quantidade
     * @return the boolean
     */
// Método para realizar reposição
    public boolean realizarReposicao(String nomeProduto, int quantidade) {
        Produto produto = buscarProduto(nomeProduto);

        if (produto == null) {
            System.out.println("Produto inválido.");
            return false;
        }

        produto.repor(quantidade);
        System.out.println("Reposição de " + quantidade + " unidades de " + produto.getNome() + " realizada com sucesso.");
        return true;
    }

    /**
     * Gerar relatorio.
     */
// Método para gerar relatório
    public void gerarRelatorio() {
        System.out.println("\n=== RELATÓRIO ===");
        double totalEstoqueGeral = 0.0;

        for (Produto produto : produtos) {
            System.out.println(produto.toString());
            totalEstoqueGeral += produto.getValorTotalEstoque();
        }

        System.out.printf("TOTAL EM ESTOQUE: R$%.2f%n", totalEstoqueGeral);
    }

    /**
     * Gets produtos.
     *
     * @return the produtos
     */
// Getter para a lista de produtos (se necessário)
    public List<Produto> getProdutos() {
        return produtos;
    }
}
