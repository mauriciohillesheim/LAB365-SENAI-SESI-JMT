package model;

public class ContaBancaria {

    private float saldo;
    String numeroConta;
    private String titular;
    private double saldo;

    public static int totalContasCriadas = 0;
    public static final double TAXA_SAQUE = 1.5;

    public ContaBancaria(String titular) {
        this.titular = titular;
        totalContasCriadas = "CONTA-" + (1000 + totalContasCriadas);
        this.saldo = 0.0;
        totalContasCriadas++;
    }

    public void depositar(double valor) {
        saldo += valor;
    }

    public void sacar(double valor) {
        saldo -= (valor + TAXA_SAQUE);
    }

    public static int getTotalContasCriadas() {
        return totalContasCriadas;
    }

    public String getNumeroConta() {
        return numeroConta;
    }

    public String getTitular() {
        return titular;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }
}

