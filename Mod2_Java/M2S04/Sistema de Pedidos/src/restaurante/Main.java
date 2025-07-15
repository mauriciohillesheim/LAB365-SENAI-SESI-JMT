package restaurante;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Restaurante meuRestaurante = new Restaurante("Meu Restaurante");

        int opcao;
        do {
            System.out.println("\n--- Menu do Restaurante ---");
            System.out.println("1. Cadastrar item");
            System.out.println("2. Ver cardápio");
            System.out.println("3. Fazer pedido");
            System.out.println("4. Ver estatísticas");
            System.out.println("5. Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

            switch (opcao) {
                case 1:
                    System.out.print("Digite o código do item: ");
                    String codigo = scanner.nextLine();
                    System.out.print("Digite o nome do item: ");
                    String nome = scanner.nextLine();
                    System.out.print("Digite o preço do item: ");
                    double preco = scanner.nextDouble();
                    scanner.nextLine(); // Consumir a nova linha

                    ItemCardapio novoItem = new ItemCardapio(codigo, nome, preco);
                    meuRestaurante.adicionarItem(novoItem);
                    System.out.println("Item cadastrado com sucesso!");
                    break;
                case 2:
                    meuRestaurante.listarCardapio();
                    break;
                case 3:
                    System.out.print("Digite os códigos dos itens separados por vírgula (ex: A01,B02): ");
                    String codigosPedidoStr = scanner.nextLine();
                    String[] codigosPedido = codigosPedidoStr.split(",");
                    double totalPedido = meuRestaurante.fazerPedido(codigosPedido);
                    System.out.printf("Valor total do pedido: R$%.2f%n", totalPedido);
                    break;
                case 4:
                    System.out.println("\n--- Estatísticas ---");
                    System.out.println("Total de itens cadastrados: " + Restaurante.getTotalItens());
                    System.out.println("Total de restaurantes criados: " + Restaurante.getTotalRestaurantes());
                    break;
                case 5:
                    System.out.println("Saindo do sistema. Até mais!");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        } while (opcao != 5);

        scanner.close();
    }
}