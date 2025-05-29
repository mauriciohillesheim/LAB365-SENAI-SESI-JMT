const dadosDosSetores = {
    comercial: { usuario: "CMCL12", senha: "Com&c1@l" },
    rh: { usuario: "98HR", senha: "RH!@2025" },
    ti: { usuario: "DEV456TI", senha: "IT&&||==2025" },
};

function verificarLogin(event) {
    event.preventDefault();
    const setorSelecionado = document.querySelector(
        'input[name="setor"]:checked'
    ).value;
    const usuarioDigitado = document.getElementById("usuario").value;
    const senhaDigitada = document.getElementById("Senha").value;
    const mensagem = document.getElementById("mensagem");

    const dados = dadosDosSetores[setorSelecionado];

    if (usuarioDigitado === dados.usuario && senhaDigitada === dados.senha) {
        mensagem.innerHTML = `Login realizado com sucesso!`;
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = `Login ou senha incorretos.`;
        mensagem.style.color = "red";
    }
}

const formulario = document.getElementById("form-exemplo");
formulario.addEventListener("submit", verificarLogin);
