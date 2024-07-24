import Email from "../utilities/Email.js";

import {
  formularioElement,
  inputAsuntoElement,
  inputEmailElement, inputMensajeElement,
  spinnerElement
} from "../utilities/elementos.js";

import { habilitarBotonEnviar, mostrarSpinner, validarCampos } from "../utilities/funciones.js";

// Enviar mensaje
const enviarMensaje = async (vent) => {
  vent.preventDefault();

  // Crear un nuevo objeto Email
  const email = new Email(inputEmailElement.value.trim(), inputAsuntoElement.value.trim(), inputMensajeElement.value.trim());

  // Mostrar spinner
  await mostrarSpinner();

  console.log(email);
}


// Eventos
document.addEventListener('DOMContentLoaded', () => {
  habilitarBotonEnviar(false);

  inputEmailElement.addEventListener('input', validarCampos);
  inputAsuntoElement.addEventListener('input', validarCampos);
  inputMensajeElement.addEventListener('input', validarCampos);

  formularioElement.addEventListener('submit', enviarMensaje);

});