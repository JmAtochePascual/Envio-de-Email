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
  const typo = event.target.id;

  if (valorInput === "") {
    mostrarAlerta(elementoHTML, `Este campo ${event.target.id} es obligatorio`);
    return;
  };

  if (event.target.id === 'email') {

    if (!validarEmail(valorInput)) {
      mostrarAlerta(elementoHTML, 'Email no valido');
      return;
    };
  };

  eliminarAlerta(elementoHTML);

  email[typo] = valorInput;

};





const mostrarAlerta = (elementoHTML, mensaje, tipo) => {

  eliminarAlerta(elementoHTML);

  const alerta = document.createElement('p');
  alerta.textContent = mensaje;
  alerta.classList.add('text-white', 'p-2', 'mt-5', 'text-center');

  tipo ? alerta.classList.add('bg-green-500', 'error') : alerta.classList.add('bg-red-600', 'succes');

  elementoHTML.appendChild(alerta);
};





const eliminarAlerta = (elementoHTML) => {

  const alertaElement = elementoHTML.querySelector('.error') || elementoHTML.querySelector('.succes');

  if (alertaElement) alertaElement.remove();

};




const validarEmail = (valorInput) => {

  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  return regex.test(valorInput);
};