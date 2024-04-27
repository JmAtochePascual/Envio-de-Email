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

  if (valorInput === "") {
    console.log('Campo vacio');
    return;
  };
};