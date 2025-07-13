import static //TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
import model.Calculadora;

// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Calculadora calc = new Calculadora();

        System.out.println(calc.somar(1, 1));
        System.out.println(calc.somar(1, 1, 1));
        System.out.println(calc.somar(1, 0, 2, 0));

        System.out.println(calc.somar(new int[]{2, 2, 2, 2}));

        calc.somar()
    }


        /*System.out.printf("--- M2S04 ---\n");

        ContaBancaria conta1 = new ContaBancaria("Joaquim");




        Double imc =Animal.calcIMC( peso:100, altura:1.90);
        System.out.println("o imc é: = " + imc);




        Animal NovoAnimal = new Animal(Nome:"Missi", idade:2);
        Animal outroAnimal = new Animal(Nome:"Lulu", idade:1);



        Animal metodoEstatico = new Animal();
    }*/
}