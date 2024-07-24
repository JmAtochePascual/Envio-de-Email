import Email from "../utilities/Email.js";
import { formularioElement, inputAsuntoElement, inputEmailElement, inputMensajeElement } from "../utilities/elementos.js";
import { habilitarBotonEnviar, validarCampos } from "../utilities/funciones.js";

// Enviar mensaje
const enviarMensaje = (vent) => {
  vent.preventDefault();

  // Crear un nuevo objeto Email
  const email = new Email(inputEmailElement.value.trim(), inputAsuntoElement.value.trim(), inputMensajeElement.value.trim());


}


// Eventos
document.addEventListener('DOMContentLoaded', () => {
  habilitarBotonEnviar(false);

  inputEmailElement.addEventListener('input', validarCampos);
  inputAsuntoElement.addEventListener('input', validarCampos);
  inputMensajeElement.addEventListener('input', validarCampos);

  formularioElement.addEventListener('submit', enviarMensaje);

});