document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.botao');
    const tabela = document.querySelector('.tabelaInformacoes');
    
    btn.addEventListener('click', function() {
        if (tabela.style.display === 'none') {
            tabela.style.display = 'table';
            btn.textContent = 'Ocultar Tabela';
        } else {
            tabela.style.display = 'none';
            btn.textContent = 'Mostrar Tabela';
        }
    });
});