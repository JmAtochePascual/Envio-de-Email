const inputEmailElement = document.querySelector('#email');
const inputAsuntoElement = document.querySelector('#asunto');
const inputMensajeElement = document.querySelector('#mensaje');
const formularioElement = document.querySelector('#formulario');
const botonEnviarElement = document.querySelector('#enviar');
const botonResetElement = document.querySelector('#resetear');
const spinnerElement = document.querySelector('#spinner');
const email = {
  email: '',
  asunto: '',
  mensaje: ''
};

const sendEmail = async (event) => {
  event.preventDefault();

  await showSpinner();

  formularioElement.reset();

  resetEmail();

  validateActiveButton(email);

  showNotificaction('Email enviado correctamente!');
};

const setValueEmail = (event) => {
  email[event.target.name] = event.target.value.trim();
  validateActiveButton(email);
};

const validateActiveButton = (email) => {
  if (Object.values(email).every(value => value !== '')) {
    botonEnviarElement.disabled = false;
    botonEnviarElement.classList.remove('button-disbled');
    return;
  };

  botonEnviarElement.disabled = true;
  botonEnviarElement.classList.add('button-disbled');
};

const showSpinner = () => new Promise((resolve) => {
  spinnerElement.classList.remove('hidden');

  setTimeout(() => {
    spinnerElement.classList.add('hidden');
    resolve();
  }, 3000);
});

const resetEmail = () => {
  email.email = '';
  email.asunto = '';
  email.mensaje = '';
};

const showNotificaction = (message) => {

  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  messageElement.classList.add('text-center', 'p-3', 'mb-3', 'text-white', 'font-bold', 'uppercase', 'rounded', 'shadow', 'mt-3', 'bg-green-500');

  formularioElement.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 3000);
};

document.addEventListener('DOMContentLoaded', () => {
  inputEmailElement.addEventListener('input', setValueEmail);
  inputAsuntoElement.addEventListener('input', setValueEmail);
  inputMensajeElement.addEventListener('input', setValueEmail);
  formularioElement.addEventListener('submit', sendEmail);
});