// Variables
const inputEmailElement = document.querySelector('#email');
const inputAsuntoElement = document.querySelector('#asunto');
const inputMensajeElement = document.querySelector('#mensaje');
const formularioElement = document.querySelector('#formulario');
const buttonEnviarElement = document.querySelector('#enviar');
const buttonResetElement = document.querySelector('#resetear');
const objMensaje = {
  email: '',
  asunto: '',
  mensaje: ''
};

// Funcion que inicializa la aplicacion
const init = async (event) => {
  event.preventDefault();

  obtenerDatosFormulario();

  if (!validarObjetoMensaje()) {
    mostrarAlerta('Todos los campos son obligatorios', false);
    return;
  }

  desabilitarBotonEnviar();

  // Mostrar un spinner
  await mostrarSpinner();

  // Mostrar una alerta de envio exitoso
  mostrarAlerta('Mensaje enviado correctamente', true);

  formularioElement.reset();

  limpiarObjetoMensaje();
}

// Funcion que obtiene los datos del formulario
const obtenerDatosFormulario = () => {
  objMensaje.email = inputEmailElement.value.trim();
  objMensaje.asunto = inputAsuntoElement.value.trim();
  objMensaje.mensaje = inputMensajeElement.value.trim();
}


// Funcion que valida los datos del formulario
const validarObjetoMensaje = () => Object.values(objMensaje).every(valor => valor !== '');


// Funcion que muestra una alerta
const mostrarAlerta = (mensaje, tipo) => {

  // Validar si la alerta ya existe
  const alerta = document.querySelector('.bg-red-600');

  if (alerta) {
    return;
  }

  // Crear la alerta
  const alertaElement = document.createElement('p');
  alertaElement.textContent = mensaje;
  alertaElement.className = `text-white p-3 mb-8 text-center ${tipo ? 'bg-green-500' : 'bg-red-600'}`;


  // Muestra la alteran al inicio del formulario
  formularioElement.insertBefore(alertaElement, formularioElement.firstChild);


  // Elimina la alerta despues de 3 segundos
  setTimeout(() => {
    alertaElement.remove();
  }, 3000);
}


// Muestra un spinner
const mostrarSpinner = () => {
  return new Promise((resolve) => {
    const spinner = document.querySelector('#spinner');
    spinner.classList.remove('hidden');

    formularioElement.appendChild(spinner);

    setTimeout(() => {
      spinner.classList.add('hidden');
      resolve();
    }, 3000);
  });
}

// desabilitar el boton de enviar si los campos estan vacios
const desabilitarBotonEnviar = () => {
  buttonEnviarElement.disabled = true;
  buttonEnviarElement.classList.add('opacity-50');
}

// Habilitar el boton de enviar si los campos estan llenos
const habilitarBotonEnviar = () => {
  buttonEnviarElement.disabled = false;
  buttonEnviarElement.classList.remove('opacity-50');
}

// validar si todos las propiedades del objeto tienen un valor para habilitar el boton de enviar
const validarBotonEnviar = (evento) => {

  objMensaje[evento.target.name] = evento.target.value.trim();

  if (validarObjetoMensaje()) {
    habilitarBotonEnviar();
  } else {
    desabilitarBotonEnviar();
  }
}

// Limpiar los campos del objeto mensaje
const limpiarObjetoMensaje = () => {
  objMensaje.email = '';
  objMensaje.asunto = '';
  objMensaje.mensaje = '';
}


// Funcion que resetea y limpia el formulario
const limpiarFormulario = () => {
  limpiarObjetoMensaje();
  formularioElement.reset();
  desabilitarBotonEnviar();
}



document.addEventListener('DOMContentLoaded', () => {
  desabilitarBotonEnviar();

  inputAsuntoElement.addEventListener('input', validarBotonEnviar);
  inputMensajeElement.addEventListener('input', validarBotonEnviar);
  inputEmailElement.addEventListener('input', validarBotonEnviar);

  formularioElement.addEventListener('submit', init);

  buttonResetElement.addEventListener('click', limpiarFormulario);
});