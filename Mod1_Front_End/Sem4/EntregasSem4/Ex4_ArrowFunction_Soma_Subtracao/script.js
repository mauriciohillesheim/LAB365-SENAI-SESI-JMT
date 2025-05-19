const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;

const calcular = (operacao) => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML =
            '<p class="error">Digite dois números válidos!</p>';
        return;
    }

    const resultado =
        operacao === "soma" ? soma(num1, num2) : subtracao(num1, num2);

    resultadoDiv.innerHTML = `
        <p class="result">Resultado da ${
            operacao === "soma" ? "soma" : "subtração"
        }:</p>
        <p class="result-number">${resultado}</p>
    `;
};
