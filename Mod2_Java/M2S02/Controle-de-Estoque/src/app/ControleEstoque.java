package app;

import service.GerenciadorDeEstoque;
import java.util.Scanner;

public class ControleEstoque {
    private GerenciadorDeEstoque gerenciador;
    private Scanner scanner;

    // Construtor
    public ControleEstoque() {
        this.gerenciador = new GerenciadorDeEstoque();
        this.scanner = new Scanner(System.in);
    }

    // Método para exibir o menu
    public void exibirMenu() {
        System.out.println("\n[1] Venda");
        System.out.println("[2] Reposição");
        System.out.println("[3] Relatório");
        System.out.println("[4] Sair");
    }

    // Método para processar venda
    public void processarVenda() {
        System.out.print("Qual produto deseja vender (Tomate, Batata, Cebola)? ");
        String produto = scanner.nextLine();

        System.out.print("Qual a quantidade a ser vendida? ");
        int quantidade = scanner.nextInt();
        scanner.nextLine(); // Consumir a quebra de linha

        gerenciador.realizarVenda(produto, quantidade);
    }

    // Método para processar reposição
    public void processarReposicao() {
        System.out.print("Qual produto deseja repor (Tomate, Batata, Cebola)? ");
        String produto = scanner.nextLine();

        System.out.print("Qual a quantidade a ser reposta? ");
        int quantidade = scanner.nextInt();
        scanner.nextLine(); // Consumir a quebra de linha

        gerenciador.realizarReposicao(produto, quantidade);
    }

    // Método principal do programa
    public void executar() {
        int opcao;

        do {
            exibirMenu();
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); // Consumir a quebra de linha

            switch (opcao) {
                case 1:
                    processarVenda();
                    break;
                case 2:
                    processarReposicao();
                    break;
                case 3:
                    gerenciador.gerarRelatorio();
                    break;
                case 4:
                    System.out.println("Saindo do sistema.");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }
        } while (opcao != 4);

        scanner.close();
    }
}
