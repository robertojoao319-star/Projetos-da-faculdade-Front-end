const formulario = document.querySelector('#form-login');
const campos = [
  { input: document.querySelector('#email'), erro: document.querySelector('#erro-email'), nome: 'E-mail' },
  { input: document.querySelector('#senha'), erro: document.querySelector('#erro-senha'), nome: 'Senha' }
];
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  let valido = true;

  campos.forEach(({ input, erro, nome }) => {
    const vazio = input.value.trim() === '';
    input.classList.toggle('invalido', vazio);
    input.setAttribute('aria-invalid', String(vazio));
    erro.textContent = vazio ? `O campo ${nome} deve ser preenchido.` : '';
    if (vazio) valido = false;
  });

  if (!valido) {
    resultado.className = 'resultado erro';
    resultado.textContent = 'Corrija os campos indicados antes de continuar.';
    campos.find(({ input }) => input.value.trim() === '')?.input.focus();
    return;
  }

  resultado.className = 'resultado sucesso';
  resultado.textContent = 'Validação concluída: os campos foram preenchidos.';
});

campos.forEach(({ input, erro, nome }) => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.classList.remove('invalido');
      input.setAttribute('aria-invalid', 'false');
      erro.textContent = '';
    } else if (input.getAttribute('aria-invalid') === 'true') {
      erro.textContent = `O campo ${nome} deve ser preenchido.`;
    }
  });
});
