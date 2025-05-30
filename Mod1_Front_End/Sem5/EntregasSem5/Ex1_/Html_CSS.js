const dadosDosSetores = {
    comercial: { usuario: "", senha: "" },
    rh: { usuario: "", senha: "" },
    ti: { usuario: "", senha: "" }
};

function verificarLogin(event) {
    event.preventDefault();

    // Agora pegamos os valores dentro da função
    const setorSelecionado = document.querySelector('input[name="setor"]:checked').value;
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

// Evento no formulário
const formulario = document.getElementById("form-exemplo");
formulario.addEventListener("submit", verificarLogin);
