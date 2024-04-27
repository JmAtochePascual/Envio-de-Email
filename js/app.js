// Variables 
const inputEmailElement = document.querySelector('#email');
const inputAsuntoElement = document.querySelector('#asunto');
const inputMensajeElement = document.querySelector('#mensaje');
const email = {
  email: '',
  asunto: '',
  mensaje: ''
};




// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {
  // Event Listeners
  inputEmailElement.addEventListener('blur', validarCampo);
  inputAsuntoElement.addEventListener('blur', validarCampo);
  inputMensajeElement.addEventListener('blur', validarCampo);
});





const validarCampo = (event) => {

  const valorInput = event.target.value.trim();
  const elementoHTML = event.target.parentElement;

  if (valorInput === "") {
    mostrarAlerta(elementoHTML, `Este campo ${event.target.id} es obligatorio`);
    return;
  };
};





const mostrarAlerta = (elementoHTML, mensaje, tipo) => {
  const alerta = document.createElement('p');
  alerta.textContent = mensaje;
  alerta.classList.add('text-white', 'p-2', 'mt-5', 'text-center', 'error');

  tipo ? alerta.classList.add('bg-green-500') : alerta.classList.add('bg-red-600');

  elementoHTML.appendChild(alerta);
};