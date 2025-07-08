package model;

public class Animal {

    public static int quantidadeAnimais = 0;
    public String nome;
    public int idade;





    public Animal(String Nome, int idade) {
        this.nome = Nome;
        this.idade = idade;
        quantidadeAnimais++;
    }

    /*public Animal(Animal animal) {
        this.nome = animal.nome;
        this.idade = idade;
        quantidadeAnimais++;
    }*/



    public static void metodoEstatico(){




        System.out.println("Método Estático foi usado"+ quantidadeAnimais);








    }
}
