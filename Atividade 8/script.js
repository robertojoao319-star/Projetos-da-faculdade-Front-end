function somar(){
    let n1 = Number(window.prompt('Digite o primeiro número:'));
    let n2 = Number(window.prompt('Digite o segundo número:'));
    let soma = n1 + n2;
    let res = document.querySelector('section#res');
    res.innerHTML = `<p>O resultado da soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a<strong>${soma}</strong></p>`;
}