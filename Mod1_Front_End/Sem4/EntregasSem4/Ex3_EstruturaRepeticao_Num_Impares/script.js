function contarImpares() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.textContent = "❌ Digite um número válido!";
        return;
    }

    let contador = 0;
    let impares = [];
    let i = 1;

    while (i <= numero) {
        if (i % 2 !== 0) {
            contador++;
            impares.push(i);
        }
        i++;
    }

    resultado.innerHTML = `
        <p>Números ímpares até ${numero}: <strong>${contador}</strong></p>
        <p>(${impares.join(", ")})</p>
    `;
}
