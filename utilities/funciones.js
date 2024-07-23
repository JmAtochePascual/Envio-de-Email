import { botonEnviarElement, inputAsuntoElement, inputEmailElement, inputMensajeElement } from './elementos.js';


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

export {
  habilitarBotonEnviar,
  validarCampos
}