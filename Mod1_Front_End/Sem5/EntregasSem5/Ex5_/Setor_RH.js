document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const dataTable = document.getElementById('dataTable');
    
    // Função para alternar a visibilidade da tabela
    function toggleTableVisibility() {
        if (dataTable.classList.contains('hidden')) {
            // Mostrar tabela
            dataTable.classList.remove('hidden');
            toggleButton.textContent = 'Ocultar Tabela';
            toggleButton.style.backgroundColor = '#f44336';
        } else {
            // Ocultar tabela
            dataTable.classList.add('hidden');
            toggleButton.textContent = 'Mostrar Tabela';
            toggleButton.style.backgroundColor = '#4CAF50';
        }
    }
    
    // Adiciona o evento de clique ao botão
    toggleButton.addEventListener('click', toggleTableVisibility);
});