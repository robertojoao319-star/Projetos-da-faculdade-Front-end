const botaoIniciar = document.querySelector('#iniciar');
const saida = document.querySelector('#resultado');

botaoIniciar.addEventListener('click', () => {
  const numeros = [];
  while (true) {
    const entrada = window.prompt('Digite um número inteiro ou “s” para terminar:');
    if (entrada === null) break;
    const valor = entrada.trim();
    if (valor.toLowerCase() === 's') break;
    if (valor === '') {
      window.alert('Digite um número ou “s” para terminar.');
      continue;
    }
    const numero = Number(valor);
    if (!Number.isInteger(numero)) {
      window.alert('Valor inválido. Digite um número inteiro ou “s”.');
      continue;
    }
    numeros.push(numero);
  }

  const soma = numeros.reduce((total, numero) => total + numero, 0);
  saida.className = numeros.length ? 'resultado sucesso' : 'resultado';
  saida.textContent = numeros.length
    ? `Valores: ${numeros.join(', ')}. Quantidade: ${numeros.length}. Soma: ${soma}.`
    : 'Nenhum número foi informado. Soma: 0.';
  window.alert(numeros.length ? `A soma dos valores é: ${soma}` : 'Nenhum número foi informado. Soma: 0.');
});
