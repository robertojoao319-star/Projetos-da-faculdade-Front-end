let numero = 0;
const elementoNumero = document.getElementById("contador");
const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");
const botaoZerar = document.getElementById("zerar");

function atualizarContador() {
    elementoNumero.textContent = numero;
    elementoNumero.classList.toggle("negativo", numero < 0);
}

botaoAumentar.addEventListener("click", function () {
    numero++;
    atualizarContador();
});

botaoDiminuir.addEventListener("click", function () {
    numero--;
    atualizarContador();
});

botaoZerar.addEventListener("click", function () {
    numero = 0;
    atualizarContador();
});
