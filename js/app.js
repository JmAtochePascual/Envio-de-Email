import { inputAsuntoElement, inputEmailElement, inputMensajeElement } from "../utilities/elementos.js";
import { habilitarBotonEnviar, validarCampos } from "../utilities/funciones.js";



// Eventos
document.addEventListener('DOMContentLoaded', () => {
  habilitarBotonEnviar(false);

  inputEmailElement.addEventListener('input', validarCampos);
  inputAsuntoElement.addEventListener('input', validarCampos);
  inputMensajeElement.addEventListener('input', validarCampos);

});