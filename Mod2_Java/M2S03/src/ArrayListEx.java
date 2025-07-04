import java.util.ArrayList;
import java.util.List;


public class ArrayListEx {
    public static void main(String[] args){
        List<String> lista = new ArrayLisy<>();

        lista.add("Maçã"); //0
        lista.add("Banana"); // 1 -> 2
        lista.add(1,"Laranja"); //2
        lista.add("Morango"); //3

        lista.sort(Comparator.naturalOrder());

        List<String> filtradas = lista.stream()
                        .filter( String p -> p.length() > 5)
                        .map (String::toUpperCase)
                        .sorted(Comparator.reverseOrder())
                        .collect(Collectors.toList());

        int totalCaracters = lista.stream()
                        .mapToInt(String::length)

                        .reduce

        System.out.println(lista);
    }
}