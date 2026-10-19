const botoes = Document.querySelectorAll("button");
const mensagem = Document.querySelector("mensagem");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        mensagem.textContent = `Você clicou no botão: ` +
        botao.textContent.trim();
    });
});