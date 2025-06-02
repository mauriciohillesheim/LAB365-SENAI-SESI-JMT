// Lista de palavras para o jogo
const words = [
    "ELEFANTE", "GIRAFA", "LEOPARDO", "RINOCERONTE", "HIPOPOTAMO",
    "TARTARUGA", "CROCODILO", "GALINHA", "PAPAGAIO", "AVESTRUZ",
    "CAMALEÃO", "SAGUI", "GORILA", "ORANGOTANGO", "CHIMPANZE",
    
    // Frutas
    "BANANA", "MACA", "LARANJA", "MORANGO", "ABACAXI",
    "MELANCIA", "UVA", "PESSEGO", "KIWI", "MANGA",
    "GOIABA", "CEREJA", "FRAMBOESA", "AMEIXA", "FIGO",
];

// Variáveis do jogo
let selectedWord = "";
let correctLetters = [];
let wrongLetters = [];
let mistakes = 0;
const maxMistakes = 8; // Número máximo de erros antes de perder

// Elementos do DOM
const wordDisplay = document.getElementById("word-display");
const wrongLettersEl = document.getElementById("wrong-letters-list");
const messageEl = document.getElementById("message");
const keyboardEl = document.getElementById("keyboard");
const restartBtn = document.getElementById("restart-btn");

// Inicializar o jogo
function initGame() {
    // Selecionar uma palavra aleatória
    selectedWord = words[Math.floor(Math.random() * words.length)];
    
    // Resetar variáveis
    correctLetters = Array(selectedWord.length).fill("");
    wrongLetters = [];
    mistakes = 0;
    
    // Atualizar a exibição
    updateWordDisplay();
    updateWrongLetters();
    updateHangman();
    messageEl.textContent = "";
    
    // Criar teclado
    createKeyboard();
}

// Atualizar a exibição da palavra
function updateWordDisplay() {
    wordDisplay.innerHTML = selectedWord
        .split("")
        .map(letter => correctLetters.includes(letter) ? letter : "_")
        .join(" ");
        
    // Verificar se o jogador ganhou
    if (!wordDisplay.textContent.includes("_")) {
        messageEl.textContent = "Parabéns! Você ganhou!";
        disableKeyboard();
    }
}

// Atualizar letras erradas
function updateWrongLetters() {
    wrongLettersEl.textContent = wrongLetters.join(", ");
}

// Atualizar o desenho da forca
function updateHangman() {
    const parts = ["top-bar", "rope", "head", "body", "left-arm", "right-arm", "left-leg", "right-leg"];
    
    // Mostrar partes conforme os erros
    for (let i = 0; i < mistakes; i++) {
        if (i < parts.length) {
            document.getElementById(parts[i]).style.display = "block";
        }
    }
    
    // Verificar se o jogador perdeu
    if (mistakes >= maxMistakes) {
        messageEl.textContent = `Game Over! A palavra era: ${selectedWord}`;
        disableKeyboard();
    }
}

// Criar teclado virtual
function createKeyboard() {
    keyboardEl.innerHTML = "";
    
    // Criar teclas de A-Z
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const button = document.createElement("button");
        button.className = "key";
        button.textContent = letter;
        button.id = `key-${letter}`;
        button.addEventListener("click", () => handleGuess(letter));
        keyboardEl.appendChild(button);
    }
}

// Desativar teclado quando o jogo termina
function disableKeyboard() {
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => {
        key.disabled = true;
    });
}

// Processar tentativa do jogador
function handleGuess(letter) {
    const keyElement = document.getElementById(`key-${letter}`);
    
    // Verificar se a letra já foi tentada
    if (correctLetters.includes(letter) || wrongLetters.includes(letter)) {
        messageEl.textContent = "Você já tentou esta letra!";
        return;
    }
    
    // Verificar se a letra está na palavra
    if (selectedWord.includes(letter)) {
        // Adicionar às letras corretas
        selectedWord.split("").forEach((char, index) => {
            if (char === letter) {
                correctLetters[index] = letter;
            }
        });
        
        keyElement.classList.add("correct");
        messageEl.textContent = "Boa! Letra correta!";
    } else {
        // Adicionar às letras erradas
        wrongLetters.push(letter);
        mistakes++;
        
        keyElement.classList.add("wrong");
        messageEl.textContent = "Ops! Letra incorreta!";
        
        updateWrongLetters();
        updateHangman();
    }
    
    // Desativar a tecla
    keyElement.disabled = true;
    
    // Atualizar exibição da palavra
    updateWordDisplay();
}

// Evento de reinício
restartBtn.addEventListener("click", () => {
    // Resetar partes da forca
    document.querySelectorAll(".hangman-part").forEach(part => {
        part.style.display = "none";
    });
    // Mostrar apenas base e poste
    document.getElementById("base").style.display = "block";
    document.getElementById("pole").style.display = "block";
    
    // Iniciar novo jogo
    initGame();
});

// Iniciar o jogo quando a página carrega
window.addEventListener("load", initGame);

// Adicionar suporte para digitação pelo teclado físico
document.addEventListener("keydown", (e) => {
    if (/^[a-z]$/i.test(e.key)) {
        const letter = e.key.toUpperCase();
        const keyElement = document.getElementById(`key-${letter}`);
        if (keyElement && !keyElement.disabled) {
            handleGuess(letter);
        }
    }
});

const playerName = localStorage.getItem('hangmanPlayerName') || "Jogador";
document.getElementById('player-display').textContent = playerName;

// Modificar mensagens para incluir o nome (sem alterar as funções originais)
const originalUpdateWordDisplay = updateWordDisplay;
updateWordDisplay = function() {
    originalUpdateWordDisplay();
    if (!wordDisplay.textContent.includes("_")) {
        messageEl.textContent = `Parabéns ${playerName}! Você ganhou!`;
    }
};

const originalUpdateHangman = updateHangman;
updateHangman = function() {
    originalUpdateHangman();
    if (mistakes >= maxMistakes) {
        messageEl.textContent = `${playerName}, Game Over! A palavra era: ${selectedWord}`;
    }
};