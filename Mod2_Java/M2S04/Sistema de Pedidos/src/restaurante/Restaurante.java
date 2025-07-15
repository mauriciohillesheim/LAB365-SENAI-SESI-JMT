package restaurante;
import java.util.ArrayList;
import java.util.List;

public class Restaurante {
    private String nome;
    private List<ItemCardapio> cardapio;

    private static int totalItens = 0;
    private static int totalRestaurantes = 0;

    public Restaurante(String nome) {
        this.nome = nome;
        this.cardapio = new ArrayList<>();
        totalRestaurantes++;
    }

    public String getNome() {
        return nome;
    }

    public List<ItemCardapio> getCardapio() {
        return cardapio;
    }

    public static int getTotalItens() {
        return totalItens;
    }

    public static int getTotalRestaurantes() {
        return totalRestaurantes;
    }

    public void adicionarItem(ItemCardapio item) {
        this.cardapio.add(item);
        totalItens++;
    }

    public void listarCardapio() {
        if (cardapio.isEmpty()) {
            System.out.println("Cardápio vazio.");
            return;
        }
        System.out.println("Cardápio do " + nome + ":");
        for (ItemCardapio item : cardapio) {
            System.out.println(item);
        }
    }

    public List<ItemCardapio> buscarItens(String... codigos) {
        List<ItemCardapio> itensEncontrados = new ArrayList<>();
        for (String codigo : codigos) {
            for (ItemCardapio item : cardapio) {
                if (item.getCodigo().equals(codigo)) {
                    itensEncontrados.add(item);
                    break;
                }
            }
        }
        return itensEncontrados;
    }

    public double fazerPedido(String... codigos) {
        double precoTotal = 0.0;
        for (String codigo : codigos) {
            boolean encontrado = false;
            for (ItemCardapio item : cardapio) {
                if (item.getCodigo().equals(codigo)) {
                    precoTotal += item.getPreco();
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                System.out.println("Item com código " + codigo + " não encontrado. Contabilizado como 0.");
            }
        }
        return precoTotal;
    }
}
