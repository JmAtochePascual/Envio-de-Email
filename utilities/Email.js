// Clase Email
class Email {
  // Variables privadas
  #email;
  #asunto;
  #mensaje;

  // Constructor
  constructor(email, asunto, mensaje) {
    this.#email = email;
    this.#asunto = asunto;
    this.#mensaje = mensaje;
  }

};

export default Email;