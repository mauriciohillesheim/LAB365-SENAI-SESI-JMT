function calcular() {
    const input = document.getElementById("numeroInput");
    const resultadoDiv = document.getElementById("resultado");
    const numero = parseInt(input.value);

    if (isNaN(numero) || numero < 1) {
        resultadoDiv.textContent =
            "Por favor, digite um número válido maior que zero.";
        return;
    }

    let contador = 0;
    let numeroAtual = 1;
    let paresEncontrados = [];

    while (numeroAtual <= numero) {
        if (numeroAtual % 2 === 0) {
            contador++;
            paresEncontrados.push(numeroAtual);
        }
        numeroAtual++;
    }

    resultadoDiv.innerHTML = `
        <p>Números pares até ${numero}:</p>
        <p>Quantidade encontrada: <strong>${contador}</strong></p>
        <p>Números: <strong>${paresEncontrados.join(", ")}</strong></p>`;

    input.value = "";
}