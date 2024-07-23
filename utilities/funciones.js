import { botonEnviarElement } from './elementos.js';


// Funcion para habilitar o deshabilitar el boton de enviar
const habilitarBotonEnviar = (estado) => {
  botonEnviarElement.disabled = estado ? false : true;
  estado
    ? botonEnviarElement.classList.remove('opacity-50')
    : botonEnviarElement.classList.add('opacity-50');
}

export {
  habilitarBotonEnviar
}