let numero = 0;
const elementoNumero = document.getElementById("contador");

function atualizarContador() {
    elementoNumero.textContent = numero;
    elementoNumero.classList.toggle("negativo", numero < 0);
}

document.getElementById("aumentar").addEventListener("click", function() 
{
    numero++;
    atualizarContador();
});

document.getElementById("diminuir").addEventListener("click", function(){
    numero--;
    atualizarContador();
});

document.getElementById("zerar").addEventListener("click", function(){
    numero = 0;
    atualizarContador();
});