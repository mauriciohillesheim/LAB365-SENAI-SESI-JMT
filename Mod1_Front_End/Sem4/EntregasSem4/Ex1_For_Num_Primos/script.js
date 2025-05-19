function isPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function contarPrimos(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrimo(i)) count++;
    }
    return count;
}

function verificarPrimos() {
    const input = document.getElementById('numeroInput');
    const resultadoDiv = document.getElementById('resultado');
    const numero = parseInt(input.value);

    if (isNaN(numero)) {
        resultadoDiv.textContent = "Por favor, digite um número válido.";
        return;
    }

    if (numero < 2) {
        resultadoDiv.textContent = "O número deve ser maior ou igual a 2.";
        return;
    }

    const quantidadePrimos = contarPrimos(numero);
    const primos = [];
    
    for (let i = 2; i <= numero; i++) {
        if (isPrimo(i)) primos.push(i);
    }

    resultadoDiv.innerHTML = `
        <p>Quantidade de números primos até ${numero}: <strong>${quantidadePrimos}</strong></p>
        <p>Números primos encontrados: <strong>${primos.join(', ')}</strong></p>
    `;
}