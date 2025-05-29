const dadosDosSetores = {
    comercial: { usuario: "MAURICIO", senha: "CO123", redirect: "Setor_Comercial.html" },
    rh: { usuario: "MAURICIO", senha: "RH123", redirect: "Setor_RH.html" },
    ti: { usuario: "MAURICIO", senha: "TI123", redirect: "Setor_TI.html" }
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const setorSelecionado = document.querySelector('input[name="setor"]:checked');
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("Senha").value;
    const mensagem = document.getElementById("mensagem");

    if (!setorSelecionado) {
        mensagem.textContent = `Selecione um setor válido.`;
        mensagem.style.color = "red";
        return;
    }

    const setor = setorSelecionado.value;
    const dados = dadosDosSetores[setor];

    if (!dados) {
        mensagem.textContent = `Setor inválido.`;
        mensagem.style.color = "red";
        return;
    }

    if (usuario === dados.usuario && senha === dados.senha) {
        mensagem.textContent = `Login realizado com sucesso!`;
        mensagem.style.color = "green";
        setTimeout(() => {
            window.location.href = dados.redirect;
        }, 1000);
    } else {
        mensagem.textContent = `Login ou senha incorretos.`;
        mensagem.style.color = "red";
    }
});