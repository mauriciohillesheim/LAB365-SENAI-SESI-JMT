package app;

import app.ControleEstoque;

public class Main {
    public static void main(String[] args) {
        // Criando uma instância do sistema de controle de estoque
        ControleEstoque sistema = new ControleEstoque();        // Executando o sistema
        sistema.executar();
    }
}
