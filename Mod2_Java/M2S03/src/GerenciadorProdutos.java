import java.util.Scanner;

public class Arrays {
    public static void main (String[] args){
        Scanner scanner = new Scanner(System.in);

        String[] produtos = new String[100];
        int quantidadeProdutos = 0;

        int opcao;

        do {
            System.out.println("\n\n=== MENU ===");
            System.out.println("1. Adicionar produtos");
            System.out.println("2. Listar produtos");
            System.out.println("3. Buscar produto");
            System.out.println("4. Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    if (quantidadeProdutos < produtos.length) {
                        System.out.print("Digite o nome do produto: ");
                        String novoProduto = scanner.nextLine();
                        produtos[quantidadeProdutos] = novoProduto;
                        quantidadeProdutos++;
                        System.out.println("Produto adicionado com sucesso!");

                    } else {
                        System.out.println("Limite de produtos atingido!");
                    }
                    break;

                case 2:
                    System.out.println("\n\n=== LISTA DE PRODUTOS ===");
                    if (quantidadeProdutos == 0) {
                        System.out.println("Nenhum produto cadastrado.");
                    } else {
                        for (int i = 0; i < quantidadeProdutos; i++) {
                            System.out.println((i + 1) + ". " + produtos[i]);
                        }
                    }
                    break;

                case 3:
                    System.out.println("Digite o nome do produto  buscar: ");
                    String busca = scanner.nextLine();
                    boolean encontrado = false;

                    System.out.println("\n\n=== RESULTADOS DA BUSCA ===");
                    for (int i = 0; i < quantidadeProdutos; i++) {
                        if (produtos[i].toLowerCase().contains(busca.toLowerCase())) {
                            System.out.println("- " + produtos[i]);
                            encontrado = true;
                        }
                    }

                    if (!encontrado) {
                        System.out.println("Nenhum produto encontrado com esse nome. ");
                    }
                    break;

                case 4:
                    System.out.println("Saindo do sistema... ");
                    break;

            }



        }while (opcao != 4) ;
        scanner.close();
    }
}