const titulo = document.querySelector('#titulo');
const botaoTitulo = document.querySelector('#alterar-titulo');
const botaoFundo = document.querySelector('#alterar-fundo');
const estado = document.querySelector('#estado');
let tituloAlterado = false;
let fundoAlternado = false;

botaoTitulo.addEventListener('click', () => {
  tituloAlterado = !tituloAlterado;
  titulo.textContent = tituloAlterado ? 'Título alterado!' : 'Meu título';
  estado.textContent = 'O texto do elemento <h1> foi alterado.';
});

botaoFundo.addEventListener('click', () => {
  fundoAlternado = !fundoAlternado;
  document.body.style.backgroundColor = fundoAlternado ? '#e5f7f5' : '';
  estado.textContent = fundoAlternado ? 'A cor de fundo foi alterada.' : 'A cor de fundo original foi restaurada.';
});
