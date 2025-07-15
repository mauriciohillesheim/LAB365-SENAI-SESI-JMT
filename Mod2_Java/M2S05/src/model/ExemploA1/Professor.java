package model.ExemploA1;

public class Professor extends Pessoa {

    private String disciplina;

    public Professor(String nome, int idade, String disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }
    @Override
    public void apresentar  () {
        System.out.println("Olá, sou professor de: " + disciplina);
        super.apresentar();
    }

    public void ensinar () {
        System.out.println getNome("Estou ensinando!" + disciplina);
    }
}
