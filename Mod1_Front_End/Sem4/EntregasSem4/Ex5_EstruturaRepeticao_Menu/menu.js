const soma = (pNum1, pNum2) => pNum1 + pNum2;
const subtracao = (pNum1, pNum2) => pNum1 - pNum2;

function pNumPar(numero) {
    let contador = 1;
    let qtdPares = 0;

    while (contador <= numero) {
        if (contador % 2 === 0) {
            console.log("O número " + contador + " é Par.");
            qtdPares++;
        }
        contador++;
    }

    return qtdPares;
}

function pNumImpar(numero) {
    let contador = 1;
    let qtdImpares = 0;

    while (contador <= numero) {
        if (contador % 2 !== 0) {
            console.log("O número " + contador + " é Ímpar.");
            qtdImpares++;
        }
        contador++;
    }

    return qtdImpares;
}

function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function contarPrimos(limite) {
    let contador = 0;
    for (let i = 2; i <= limite; i++) {
        if (ehPrimo(i)) contador++;
    }
    return contador;
}

function Menu() {
    let continuar = true;

    while (continuar) {
        console.log("\nEscolha uma das opções:");
        console.log("[1] Soma");
        console.log("[2] Subtração");
        console.log("[3] Quantidade de números pares");
        console.log("[4] Quantidade de números ímpares");
        console.log("[5] Quantidade de números primos");
        console.log("[6] Sair");

        const escolha = prompt("Digite o número da opção desejada: ");

        if (escolha === "6") {
            console.log("Saindo da calculadora...");
            continuar = false;
            break;
        }

        let resultado;

        switch (escolha) {
            case "1":
                const num1 = parseInt(prompt("Digite o primeiro número: "));
                const num2 = parseInt(prompt("Digite o segundo número: "));
                resultado = soma(num1, num2);
                console.log("O resultado da soma é: " + resultado);
                break;

            case "2":
                const num3 = parseInt(prompt("Digite o primeiro número: "));
                const num4 = parseInt(prompt("Digite o segundo número: "));
                resultado = subtracao(num3, num4);
                console.log("O resultado da subtração é: " + resultado);
                break;

            case "3":
                const numPares = parseInt(prompt("Digite um número limite: "));
                resultado = pNumPar(numPares);
                console.log("Quantidade de números pares: " + resultado);
                break;

            case "4":
                const numImpares = parseInt(
                    prompt("Digite um número limite: ")
                );
                resultado = pNumImpar(numImpares);
                console.log("Quantidade de números ímpares: " + resultado);
                break;

            case "5":
                const limite = parseInt(prompt("Digite um número limite: "));
                resultado = contarPrimos(limite);
                console.log(
                    "Quantidade de números primos até " +
                        limite +
                        ": " +
                        resultado
                );
                break;

            default:
                console.log("Opção inválida!!!");
                break;
        }
    }
}

Menu();
