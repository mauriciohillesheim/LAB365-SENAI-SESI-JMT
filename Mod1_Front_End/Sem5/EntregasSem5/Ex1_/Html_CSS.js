const dadosDosSetores = {
    comercial: { usuario: "CMCL12", senha: "Com&c1@l" },
    rh: { usuario: "98HR", senha: "RH!@2025" },
    ti: { usuario: "DEV456TI", senha: "IT&&||==2025" }
};

function verificarLogin(event) {
    event.preventDefault(); // Impede o formulário de recarregar

    // Agora pegamos os valores dentro da função
    const setorSelecionado = document.querySelector('input[name="setor"]:checked').value;
    const usuarioDigitado = document.getElementById("usuario").value;
    const senhaDigitada = document.getElementById("Senha").value; // cuidado: no seu input senha, o id é "Senha" com S maiúsculo!
    const mensagem = document.getElementById("mensagem");

    const dados = dadosDosSetores[setorSelecionado];

    // Fazendo a comparação
    if (usuarioDigitado === dados.usuario && senhaDigitada === dados.senha) {
        mensagem.innerHTML = `Login realizado com sucesso!`;
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = `Login ou senha incorretos.`;
        mensagem.style.color = "red";
    }
}

// Evento no formulário
const formulario = document.getElementById("form-exemplo");
formulario.addEventListener("submit", verificarLogin);
