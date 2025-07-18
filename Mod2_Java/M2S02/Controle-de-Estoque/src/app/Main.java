package app;

import app.ControleEstoque;

/**
 * The type Main.
 */
public class Main {
    /**
     * The entry point of application.
     *
     * @param args the input arguments
     */
    public static void main(String[] args) {
        // Criando uma instância do sistema de controle de estoque
        ControleEstoque sistema = new ControleEstoque();        // Executando o sistema
        sistema.executar();
    }
}
