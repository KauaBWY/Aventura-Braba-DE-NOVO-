// script.js

let erros = 0; // Contador de erros

// Seleciona todos os botões de próximo
const botoesProximo = document.querySelectorAll('.btn-proximo');

// Para cada botão de próximo, adiciona um evento de clique
botoesProximo.forEach(botao => {
    botao.addEventListener('click', () => {
        const passoAtual = botao.closest('.passo');
        const proximoPassoId = botao.getAttribute('data-proximo');
        const respostaCorreta = botao.getAttribute('data-correto');

        if (respostaCorreta === 'false') {
            erros++;
            if (erros >= 3) {
                // Se errou 3 vezes, vai para a tela de derrota
                mostrarProximoPasso(passoAtual, 'derrota');
            } else {
                // Se errou, vai para a tela de erro
                mostrarProximoPasso(passoAtual, 'erro');
            }
        } else {
            // Se a resposta estiver correta, vai para o próximo passo
            mostrarProximoPasso(passoAtual, proximoPassoId);
        }
    });
});

// Função para mostrar o próximo passo
function mostrarProximoPasso(passoAtual, proximoPassoId) {
    const proximoPasso = document.getElementById(`passo-${proximoPassoId}`) || document.getElementById(proximoPassoId);
    passoAtual.classList.remove('ativo');
    proximoPasso.classList.add('ativo');
}
