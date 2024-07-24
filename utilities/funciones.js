import { botonEnviarElement, formularioElement, inputAsuntoElement, inputEmailElement, inputMensajeElement, spinnerElement } from './elementos.js';


// Validar si todos los campos del formulario estan llenos
const validarCampos = () => {
  const emialValor = inputEmailElement.value.trim();
  const asuntoValor = inputAsuntoElement.value.trim();
  const mensajeValor = inputMensajeElement.value.trim();

  [emialValor, asuntoValor, mensajeValor].every(valor => valor !== '') ? habilitarBotonEnviar(true) : habilitarBotonEnviar(false);
}


// Habilitar o deshabilitar el boton de enviar
const habilitarBotonEnviar = (estado) => {
  botonEnviarElement.disabled = estado ? false : true;
  estado ? botonEnviarElement.classList.remove('opacity-50') : botonEnviarElement.classList.add('opacity-50');
}


//  Mostrar Spinner
const mostrarSpinner = () => new Promise((resolve) => {
  spinnerElement.classList.remove('hidden');

  setTimeout(() => {
    spinnerElement.classList.add('hidden');
    resolve();
  }, 3000);
});


// Mostrar mensaje de exito o error
const mostrarMensaje = (mensaje) => {

  const mensajeElement = document.createElement('p');
  mensajeElement.textContent = mensaje;

  mensajeElement.classList.add('text-center', 'p-3', 'mb-3', 'text-white', 'font-bold', 'uppercase', 'rounded', 'shadow', 'mt-3', 'bg-green-500');

  formularioElement.appendChild(mensajeElement);

  setTimeout(() => {
    mensajeElement.remove();
  }, 3000);
}

export {
  habilitarBotonEnviar,
  validarCampos,
  mostrarSpinner,
  mostrarMensaje
}