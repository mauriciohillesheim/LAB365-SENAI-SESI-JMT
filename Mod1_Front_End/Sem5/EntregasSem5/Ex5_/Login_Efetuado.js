document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const mensagem = document.getElementById('mensagem');
    
    const dadosDosSetores = {
        comercial: { usuario: "CMCL12", senha: "Com&c1@l", redirect: "Setor_Comercial.html" },
        rh: { usuario: "98HR", senha: "RH!@2025", redirect: "Setor_RH.html" },
        ti: { usuario: "DEV456TI", senha: "IT&&||==2025", redirect: "Setor_TI.html" }
    };

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const setorSelecionado = document.querySelector('input[name="setor"]:checked').value;
        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('Senha').value.trim();
        
        // Verifica se o setor existe
        if (!dadosDosSetores[setorSelecionado]) {
            mostrarMensagem('Setor inválido!', 'erro');
            return;
        }
        
        const dadosSetor = dadosDosSetores[setorSelecionado];
        
        // Verifica usuário e senha
        if (usuario === dadosSetor.usuario && senha === dadosSetor.senha) {
            mostrarMensagem('Login realizado com sucesso! Redirecionando...', 'sucesso');
            
            // Redireciona após 1 segundo
            setTimeout(function() {
                window.location.href = dadosSetor.redirect;
            }, 1000);
        } else {
            mostrarMensagem('Usuário ou senha incorretos!', 'erro');
        }
    });
    
    function mostrarMensagem(texto, tipo) {
        mensagem.textContent = texto;
        mensagem.className = 'mensagem ' + tipo;
    }
});