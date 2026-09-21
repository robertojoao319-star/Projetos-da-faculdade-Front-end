const display = document.getElementById("display");
let valorAtual = "0";
let valorAnterior = null;
let operacao = null;
let deveLimparDisplay = false;

function atualizarDisplay() {
    display.textContent = valorAtual;
}

function adicionarNumero(numero) {
    if (valorAtual === "Erro" || deveLimparDisplay) {
        valorAtual = numero;
        deveLimparDisplay = false;
    } else {
        valorAtual = valorAtual === "0" ? numero : valorAtual + numero;
    }
    atualizarDisplay();
}

function adicionarDecimal() {
    if (valorAtual === "Erro" || deveLimparDisplay) {
        valorAtual = "0.";
        deveLimparDisplay = false;
    } else if (!valorAtual.includes(".")) {
        valorAtual += ".";
    }
    atualizarDisplay();
}

function escolherOperacao(proximaOperacao) {
    if (valorAtual === "Erro") {
        limpar();
        return;
    }

    if (operacao && !deveLimparDisplay) {
        calcular();
    }

    valorAnterior = Number(valorAtual);
    operacao = proximaOperacao;
    deveLimparDisplay = true;
}

function calcular() {
    if (valorAnterior === null || !operacao || deveLimparDisplay) {
        return;
    }

    const valorAtualNumerico = Number(valorAtual);
    let resultado;

    switch (operacao) {
        case "+":
            resultado = valorAnterior + valorAtualNumerico;
            break;
        case "−":
            resultado = valorAnterior - valorAtualNumerico;
            break;
        case "×":
            resultado = valorAnterior * valorAtualNumerico;
            break;
        case "÷":
            if (valorAtualNumerico === 0) {
                valorAtual = "Erro";
                valorAnterior = null;
                operacao = null;
                deveLimparDisplay = true;
                atualizarDisplay();
                return;
            }
            resultado = valorAnterior / valorAtualNumerico;
            break;
        default:
            return;
    }

    valorAtual = String(Number(resultado.toFixed(10)));
    valorAnterior = null;
    operacao = null;
    deveLimparDisplay = true;
    atualizarDisplay();
}

function limpar() {
    valorAtual = "0";
    valorAnterior = null;
    operacao = null;
    deveLimparDisplay = false;
    atualizarDisplay();
}

function apagarUltimo() {
    if (valorAtual === "Erro" || deveLimparDisplay) {
        limpar();
        return;
    }

    valorAtual = valorAtual.length > 1 ? valorAtual.slice(0, -1) : "0";
    atualizarDisplay();
}

document.querySelector(".teclado").addEventListener("click", (evento) => {
    const botao = evento.target.closest("button");
    if (!botao) {
        return;
    }

    if (botao.dataset.number !== undefined) {
        adicionarNumero(botao.dataset.number);
    } else if (botao.dataset.operation) {
        escolherOperacao(botao.dataset.operation);
    } else if (botao.dataset.action === "decimal") {
        adicionarDecimal();
    } else if (botao.dataset.action === "equals") {
        calcular();
    } else if (botao.dataset.action === "clear") {
        limpar();
    } else if (botao.dataset.action === "delete") {
        apagarUltimo();
    }
});
