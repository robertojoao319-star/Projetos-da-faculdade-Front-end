const botoes = document.querySelectorAll(".botao-acao");
const mensagem = document.querySelector("#mensagem");
botoes.forEach((botao) => {
    botao.botao.addEventListener("click", () => {
        const cartao = botao.closest(".cartao-custom");
        const titulo = cartao.querySelector("h").textContent;
        const texto = cartao.querySelector("p").textContent;
        mensagem.textContent = `${titulo}: ${texto}`;
        mensagem.className = "alert alert-primary mt-4";
    });
});