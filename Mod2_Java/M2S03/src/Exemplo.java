import java.util.ArrayList;

public class Exemplo {
    public static void  main(String[] args) {

        ArrayList<String> lista = new ArrayList<>();
        System.out.println(lista);
        adicionarItem(lista, "Primeiro");
        System.out.println(lista);

        /*int y = 5;
        incrementar(x);
        System.out.println(y);*/
    }

    static void  incrementar(int pNum) {
        //int num = pNum;
        pNum += 1;
    }

    static void adicionarItem(ArrayList<String> pLista, String pNovoItem){
        pLista.add(pNovoItem);
    }
}