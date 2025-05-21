import { isValidEmail } from './helpers/is-validateEmail.js';
import { resetEmail } from './helpers/email.js';
import { showNotification } from './components/showNotification.js';
import { showSpinner } from './components/showSpinner.js';

const inputEmailElement = document.querySelector('#email');
const inputAsuntoElement = document.querySelector('#asunto');
const inputMensajeElement = document.querySelector('#mensaje');
const formularioElement = document.querySelector('#formulario');
const botonEnviarElement = document.querySelector('#enviar');

const sendEmail = async (event) => {
  event.preventDefault();

  if (!isValidEmail(email.email)) {
    botonEnviarElement.disabled = true;
    botonEnviarElement.classList.add('button-disbled');

    showNotification('El email no es válido!', 'error', formularioElement);
    await showSpinner();
    return;
  }

  botonEnviarElement.disabled = true;
  botonEnviarElement.classList.add('button-disbled');

  await showSpinner();
  formularioElement.reset();
  resetEmail(email);
  validateActiveButton(email);

  showNotification('Email enviado correctamente!', 'success', formularioElement);
};

const setValueEmail = (event) => {
  email[event.target.name] = event.target.value.trim();
  validateActiveButton(email);
};

const validateActiveButton = (email) => {
  if (Object.values(email).every((value) => value !== '')) {
    botonEnviarElement.disabled = false;
    botonEnviarElement.classList.remove('button-disbled');
    return;
  }

  botonEnviarElement.disabled = true;
  botonEnviarElement.classList.add('button-disbled');
};

document.addEventListener('DOMContentLoaded', () => {
  inputEmailElement.addEventListener('input', setValueEmail);
  inputAsuntoElement.addEventListener('input', setValueEmail);
  inputMensajeElement.addEventListener('input', setValueEmail);
  formularioElement.addEventListener('submit', sendEmail);

  botonEnviarElement.disabled = true;
  botonEnviarElement.classList.add('button-disbled');
});
