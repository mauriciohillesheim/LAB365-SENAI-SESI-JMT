const dadosDosSetores = {
    comercial: { usuario: "CMCL12", senha: "Com&c1@l" },
    rh: { usuario: "98HR", senha: "RH!@2025" },
    ti: { usuario: "DEV456TI", senha: "IT&&||==2025" }
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o formulário de recarregar

    const setorSelecionado = document.querySelector('input[name="setor"]:checked').value;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("Senha").value;
    const mensagem = document.getElementById("mensagem");

    switch (setorSelecionado){
        case "comercial":
            if (usuario === dadosDosSetores.comercial.usuario && senha === dadosDosSetores.comercial.senha) {
                mensagem.innerHTML = `Login realizado com sucesso!`;
                mensagem.style.color = "green";
                setTimeout(() => {
                    window.location.href = "Setor_Comercial.html"; // Redireciona após 1 segundo
                }, 1000);
            } else {
                mensagem.innerHTML = `Login ou senha incorretos.`;
                mensagem.style.color = "red";
            }
            break;
        case "rh":
            if (usuario === dadosDosSetores.rh.usuario && senha === dadosDosSetores.rh.senha) {
                mensagem.innerHTML = `Login realizado com sucesso!`;
                mensagem.style.color = "green";
                setTimeout(() => {
                    window.location.href = "Setor_RH.html"; // Redireciona após 1 segundo
                }, 1000);
            } else {
                mensagem.innerHTML = `Login ou senha incorretos.`;
                mensagem.style.color = "red";
            }
            break;
        case "ti":
            if (usuario === dadosDosSetores.ti.usuario && senha === dadosDosSetores.ti.senha) {
                mensagem.innerHTML = `Login realizado com sucesso!`;
                mensagem.style.color = "green";
                setTimeout(() => {
                    window.location.href = "Setor_TI.html"; // Redireciona após 1 segundo
                }, 1000);
            } else {
                mensagem.innerHTML = `Login ou senha incorretos.`;
                mensagem.style.color = "red";
            }
            break;
        default:
            mensagem.textContent = `Selecione um setor válido.`;
            mensagem.style.color = "red";
    }
});