document.addEventListener('DOMContentLoaded', function() {
    const converterBtn = document.getElementById('converterBtn');
    const numeroInput = document.getElementById('numeroInput');
    const resultadoDiv = document.getElementById('resultado');

    converterBtn.addEventListener('click', function() {
        const numero = numeroInput.value.trim();
        
        if (numero === '') {
            resultadoDiv.textContent = 'Por favor, digite um número';
            return;
        }

        const numeroDecimal = parseInt(numero);
        
        if (isNaN(numeroDecimal)) {
            resultadoDiv.textContent = 'Por favor, digite um número válido';
            return;
        }

        resultadoDiv.textContent = `O número ${numeroDecimal} em binário é: ${numeroDecimal.toString(2)}`;
    });
});