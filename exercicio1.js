const formularioSoma = document.querySelector('#form-soma');
const campoA = document.querySelector('#numero-a');
const campoB = document.querySelector('#numero-b');
const erroA = document.querySelector('#erro-a');
const erroB = document.querySelector('#erro-b');
const resultado = document.querySelector('#resultado');
const botaoLimpar = document.querySelector('#limpar');

function validarCampo(campo, elementoErro, nome) {
  const valor = campo.value.trim();
  const numero = campo.valueAsNumber;
  const invalido = valor === '' || !Number.isFinite(numero) || !Number.isInteger(numero);

  campo.classList.toggle('invalido', invalido);
  campo.setAttribute('aria-invalid', String(invalido));
  elementoErro.textContent = invalido
    ? (valor === '' ? `Digite o ${nome}.` : `O ${nome} precisa ser um número inteiro.`)
    : '';
  return invalido ? null : numero;
}

formularioSoma.addEventListener('submit', (evento) => {
  evento.preventDefault();
  resultado.className = 'resultado';
  resultado.textContent = '';

  const numeroA = validarCampo(campoA, erroA, 'primeiro número');
  const numeroB = validarCampo(campoB, erroB, 'segundo número');
  if (numeroA === null || numeroB === null) {
    resultado.className = 'resultado erro';
    resultado.textContent = 'Confira os campos destacados e tente novamente.';
    if (numeroA === null) campoA.focus();
    else campoB.focus();
    return;
  }

  const soma = numeroA + numeroB;
  resultado.className = 'resultado sucesso';
  resultado.innerHTML = `<strong>Resultado:</strong> ${numeroA} + ${numeroB} = <strong>${soma}</strong>`;
});

[campoA, campoB].forEach((campo) => {
  campo.addEventListener('input', () => {
    campo.classList.remove('invalido');
    campo.setAttribute('aria-invalid', 'false');
    if (campo === campoA) erroA.textContent = '';
    else erroB.textContent = '';
    if (resultado.classList.contains('erro')) {
      resultado.className = 'resultado';
      resultado.textContent = '';
    }
  });
});

botaoLimpar.addEventListener('click', () => {
  [campoA, campoB].forEach((campo) => {
    campo.classList.remove('invalido');
    campo.setAttribute('aria-invalid', 'false');
  });
  erroA.textContent = '';
  erroB.textContent = '';
  resultado.className = 'resultado';
  resultado.textContent = '';
  campoA.focus();
});
