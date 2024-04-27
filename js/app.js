// Variables 
const inputEmailElement = document.querySelector('#email');
const inputAsuntoElement = document.querySelector('#asunto');
const inputMensajeElement = document.querySelector('#mensaje');
const botonSubmitElement = document.querySelector('#formulario button[type="submit"]');
const botonResetElement = document.querySelector('#formulario button[type="reset"]');
const formularioElement = document.querySelector('#formulario');
const spinnerElement = document.querySelector('#spinner');
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
  botonResetElement.addEventListener('click', resetarFormulario);
  formularioElement.addEventListener('submit', enviarEmail);
});





const validarCampo = (event) => {

  const valorInput = event.target.value.trim();
  const elementoHTML = event.target.parentElement;
  const typo = event.target.id;

  // Validar campo
  if (valorInput === "") {
    mostrarAlerta(elementoHTML, `Este campo ${event.target.id} es obligatorio`);
    habilitarDesabilitarBoton(false)
    return;
  };

  // Validar email
  if (event.target.id === 'email') {

    if (!validarEmail(valorInput)) {
      mostrarAlerta(elementoHTML, 'Email no valido');
      habilitarDesabilitarBoton(false);
      return;
    };
  };

  // Eliminar alerta
  eliminarAlerta(elementoHTML);

  // Guardar datos en el objeto
  email[typo] = valorInput;

  if (Object.values(email).includes('')) return;

  habilitarDesabilitarBoton(true);
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




const habilitarDesabilitarBoton = (estado) => {

  if (estado) {
    botonSubmitElement.classList.remove('cursor-not-allowed', 'opacity-50');
    botonSubmitElement.disabled = false;
  } else {
    botonSubmitElement.classList.add('cursor-not-allowed', 'opacity-50');
    botonSubmitElement.disabled = true;
  };
}




const resetarFormulario = (event) => {

  event.preventDefault();

  email.email = '';
  email.asunto = '';
  email.mensaje = '';

  habilitarDesabilitarBoton(false);

  formularioElement.reset();
};





const enviarEmail = (event) => {
  event.preventDefault();

  mostrarSpinner();
};





const mostrarSpinner = () => {
  spinnerElement.classList.add('flex');
  spinnerElement.classList.remove('hidden');

  setTimeout(() => {
    spinnerElement.classList.remove('flex');
    spinnerElement.classList.add('hidden');
  }, 3000);
};