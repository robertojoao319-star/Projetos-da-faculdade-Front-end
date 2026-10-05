function calcularMedia(){
    let n1 = Number(window.prompt('Digite o primeiro número:'));
    let n2 = Number(window.prompt('Digite o segundo número:'));
    let media = (n1 + n2) / 2;
    let res = document.querySelector('section#res');
    res.innerHTML = `<p>A média entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${media}</strong></p>`;
}