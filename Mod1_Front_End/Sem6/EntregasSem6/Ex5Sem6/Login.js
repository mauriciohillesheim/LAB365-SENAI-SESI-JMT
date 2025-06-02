document.getElementById('start-game-btn').addEventListener('click', function() {
    const playerName = document.getElementById('player-name').value.trim();
    
    if (playerName === "") {
        alert("Por favor, digite um nickname para começar!");
        return;
    }
    
    // Armazena o nome do jogador e redireciona
    localStorage.setItem('hangmanPlayerName', playerName);
    window.location.href = 'Jogo_da_Forca.html';
});

// Permite usar Enter para iniciar
document.getElementById('player-name').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('start-game-btn').click();
    }
});