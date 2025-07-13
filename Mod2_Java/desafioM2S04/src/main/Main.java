package main;

import model.Biblioteca;
import model.Livro;

import java.util.List;
import java.util.Scanner;

public class Main {

    private static final Scanner scanner = new Scanner(System.in);
    private static final Biblioteca biblioteca = new Biblioteca();

    public static void main(String[] args) {
        // Adicionando alguns livros como exemplo para testar
        carregarDadosIniciais();

        int escolha;
        do {
            exibirMenuPrincipal();
            escolha = lerOpcao();

            switch (escolha) {
                case 1:
                    menuGestaoDeLivros();
                    break;
                case 2:
                    menuGestaoDeEmprestimos();
                    break;
                case 3:
                    menuRelatoriosEConsultas();
                    break;
                case 4:
                    menuAdministracao();
                    break;
                case 5:
                    System.out.println("Saindo do sistema... Até logo!");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        } while (escolha != 5);

        scanner.close();
    }

    // --- MENUS ---
    private static void exibirMenuPrincipal() {
        System.out.println("\n===== MENU PRINCIPAL =====");
        System.out.println("1. Gestão de Livros");
        System.out.println("2. Gestão de Empréstimos");
        System.out.println("3. Relatórios e Consultas");
        System.out.println("4. Administração do Sistema");
        System.out.println("5. Sair");
        System.out.print("Escolha uma opção: ");
    }

    private static void menuGestaoDeLivros() {
        int escolha;
        do {
            System.out.println("\n--- Gestão de Livros ---");
            System.out.println("1. Cadastrar Novo Livro");
            System.out.println("2. Editar Informações de Livro");
            System.out.println("3. Remover Livro do Acervo");
            System.out.println("4. Listar Todos os Livros");
            System.out.println("5. Buscar Livro por ISBN");
            System.out.println("6. Voltar ao Menu Principal");
            System.out.print("Escolha uma opção: ");
            escolha = lerOpcao();

            switch (escolha) {
                case 1: cadastrarNovoLivro(); break;
                case 2: editarLivro(); break;
                case 3: removerLivro(); break;
                case 4: listarTodosOsLivros(); break;
                case 5: buscarLivroPorIsbn(); break;
                case 6: System.out.println("Retornando..."); break;
                default: System.out.println("Opção inválida.");
            }
        } while (escolha != 6);
    }

    private static void menuGestaoDeEmprestimos() {
        int escolha;
        do {
            System.out.println("\n--- Gestão de Empréstimos ---");
            System.out.println("1. Registrar Empréstimo");
            System.out.println("2. Registrar Devolução");
            System.out.println("3. Listar Livros Emprestados");
            System.out.println("4. Listar Livros Disponíveis");
            System.out.println("5. Voltar ao Menu Principal");
            System.out.print("Escolha uma opção: ");
            escolha = lerOpcao();

            switch (escolha) {
                case 1: registrarEmprestimo(); break;
                case 2: registrarDevolucao(); break;
                case 3: listarLivros(biblioteca.listarLivrosEmprestados(), "Livros Emprestados"); break;
                case 4: listarLivros(biblioteca.listarLivrosDisponiveis(), "Livros Disponíveis"); break;
                case 5: System.out.println("Retornando..."); break;
                default: System.out.println("Opção inválida.");
            }
        } while (escolha != 5);
    }

    private static void menuRelatoriosEConsultas() {
        int escolha;
        do {
            System.out.println("\n--- Relatórios e Consultas ---");
            System.out.println("1. Relatório Completo do Acervo");
            System.out.println("2. Buscar Livros por Autor");
            System.out.println("3. Estatísticas de Empréstimos");
            System.out.println("4. Voltar ao Menu Principal");
            System.out.print("Escolha uma opção: ");
            escolha = lerOpcao();

            switch (escolha) {
                case 1: listarTodosOsLivros(); break;
                case 2: buscarPorAutor(); break;
                case 3: biblioteca.exibirEstatisticasEmprestimos(); break;
                case 4: System.out.println("Retornando..."); break;
                default: System.out.println("Opção inválida.");
            }
        } while (escolha != 4);
    }

    private static void menuAdministracao() {
        System.out.println("\n--- Administração do Sistema ---");
        System.out.println("Total de Livros Cadastrados: " + biblioteca.getTotalDeLivrosCadastrados());
        System.out.println("Total de Bibliotecas Criadas: " + Biblioteca.getTotalBibliotecas());
        System.out.println("Pressione Enter para voltar...");
        scanner.nextLine();
    }

    // --- AÇÕES ---

    private static void cadastrarNovoLivro() {
        System.out.println("\n--- Cadastro de Novo Livro ---");
        System.out.print("Digite o ISBN: ");
        String isbn = scanner.nextLine();
        // Verifica se o livro já existe
        if (biblioteca.buscarLivroPorIsbn(isbn) != null) {
            System.out.println("Erro: Já existe um livro com este ISBN.");
            return;
        }
        System.out.print("Digite o Título: ");
        String titulo = scanner.nextLine();
        System.out.print("Digite o Autor: ");
        String autor = scanner.nextLine();

        Livro novoLivro = new Livro(isbn, titulo, autor);
        biblioteca.adicionarLivro(novoLivro);
        System.out.println("Livro cadastrado com sucesso!");
    }

    private static void editarLivro() {
        System.out.print("\nDigite o ISBN do livro que deseja editar: ");
        String isbn = scanner.nextLine();
        Livro livro = biblioteca.buscarLivroPorIsbn(isbn);
        if (livro != null) {
            System.out.print("Digite o novo título (ou Enter para manter o atual: '" + livro.getTitulo() + "'): ");
            String novoTitulo = scanner.nextLine();
            if (!novoTitulo.isEmpty()) {
                livro.setTitulo(novoTitulo);
            }
            System.out.print("Digite o novo autor (ou Enter para manter o atual: '" + livro.getAutor() + "'): ");
            String novoAutor = scanner.nextLine();
            if (!novoAutor.isEmpty()) {
                livro.setAutor(novoAutor);
            }
            System.out.println("Informações do livro atualizadas com sucesso!");
        } else {
            System.out.println("Livro não encontrado.");
        }
    }

    private static void removerLivro() {
        System.out.print("\nDigite o ISBN do livro que deseja remover: ");
        String isbn = scanner.nextLine();
        if (biblioteca.removerLivro(isbn)) {
            System.out.println("Livro removido com sucesso.");
        } else {
            System.out.println("Livro não encontrado.");
        }
    }

    private static void listarTodosOsLivros() {
        listarLivros(biblioteca.listarTodosOsLivros(), "Acervo Completo");
    }

    private static void buscarLivroPorIsbn() {
        System.out.print("\nDigite o ISBN do livro a ser buscado: ");
        String isbn = scanner.nextLine();
        Livro livro = biblioteca.buscarLivroPorIsbn(isbn);
        if (livro != null) {
            System.out.println("Livro encontrado:");
            System.out.println(livro); // Usa o método toString() da classe Livro
        } else {
            System.out.println("Nenhum livro encontrado com este ISBN.");
        }
    }

    private static void registrarEmprestimo() {
        System.out.print("\nDigite o ISBN do livro para emprestar: ");
        String isbn = scanner.nextLine();
        if (biblioteca.emprestarLivro(isbn)) {
            System.out.println("Empréstimo registrado com sucesso!");
        } else {
            System.out.println("Não foi possível realizar o empréstimo. O livro pode não existir ou já estar emprestado.");
        }
    }

    private static void registrarDevolucao() {
        System.out.print("\nDigite o ISBN do livro para devolver: ");
        String isbn = scanner.nextLine();
        if (biblioteca.devolverLivro(isbn)) {
            System.out.println("Devolução registrada com sucesso!");
        } else {
            System.out.println("Não foi possível realizar a devolução. O livro pode não existir ou não estar emprestado.");
        }
    }

    private static void buscarPorAutor() {
        System.out.print("\nDigite o nome do autor para buscar os livros: ");
        String autor = scanner.nextLine();
        List<Livro> livrosDoAutor = biblioteca.buscarLivrosPorAutor(autor);
        listarLivros(livrosDoAutor, "Livros de " + autor);
    }

    // --- MÉTODOS AUXILIARES ---

    private static void carregarDadosIniciais() {
        biblioteca.adicionarLivro(new Livro("978-85-359-1484-1", "Cem Anos de Solidão", "Gabriel García Márquez"));
        biblioteca.adicionarLivro(new Livro("978-0-452-28423-4", "1984", "George Orwell"));
        biblioteca.adicionarLivro(new Livro("978-85-7980-333-5", "O Guia do Mochileiro das Galáxias", "Douglas Adams"));
        biblioteca.adicionarLivro(new Livro("978-85-7657-313-8", "O Nome do Vento", "Patrick Rothfuss"));
    }

    private static int lerOpcao() {
        try {
            int opcao = Integer.parseInt(scanner.nextLine());
            return opcao;
        } catch (NumberFormatException e) {
            return -1; // Retorna um valor inválido se a entrada não for um número
        }
    }

    private static void listarLivros(List<Livro> lista, String titulo) {
        System.out.println("\n--- " + titulo + " ---");
        if (lista.isEmpty()) {
            System.out.println("Nenhum livro para exibir nesta categoria.");
        } else {
            for (Livro livro : lista) {
                System.out.println(livro); // Usa o método toString() da classe Livro
            }
        }
    }
}