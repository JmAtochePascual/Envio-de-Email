# ⚡️ Envio de Emails

Este proyecto es una aplicación web interactiva que simula el envío de correos electrónicos a través de un formulario de contacto. Desarrollada con HTML, CSS y JavaScript, ofrece una experiencia de usuario completa con validación en tiempo real, retroalimentación visual mediante alertas y estados de carga, y un diseño responsivo adaptable a diferentes dispositivos. La aplicación implementa buenas prácticas de desarrollo web moderno, incluyendo validación de campos, manejo de estados de la interfaz y simulación asíncrona del proceso de envío.

## Características

- **Validación en Tiempo Real:** Implementación de validación instantánea para todos los campos del formulario (email, asunto y mensaje), con énfasis especial en la validación del formato de correo electrónico mediante expresiones regulares.
- **Sistema de Notificaciones:** Integración de un sistema de alertas que proporciona feedback inmediato al usuario, mostrando mensajes personalizados para errores de validación y confirmación de envío exitoso.
- **Diseño Adaptativo:** Implementación completa de diseño responsive con breakpoints optimizados para móviles, tablets y escritorio, garantizando una experiencia fluida en cualquier dispositivo.
- **Gestión de Estados:** Sistema robusto para manejar diferentes estados del formulario, incluyendo funcionalidad de reset completo y limpieza automática después del envío exitoso.
- **UX Mejorada:** Incorporación de elementos visuales interactivos como spinners de carga, transiciones suaves y efectos visuales que mejoran la experiencia del usuario durante todo el proceso de envío.

## Tecnologías y Herramientas

- **HTML:** Estructura semántica del formulario y elementos de la interfaz.
- **CSS:** Estilos y diseño responsivo utilizando Normalize.css y Skeleton CSS como frameworks base.
- **JavaScript:** Implementación de la lógica de validación, manejo de eventos y simulación de envío de emails.

## Estructura del Proyecto

- **dist/**
  - **app.css**: Estilos compilados de Tailwind CSS
  - **spinner.css**: Estilos para el componente de carga
- **js/**
  - **app.js**: Lógica principal de la aplicación
- **utilities/**
  - **Email.js**: Clase para manejar la lógica de emails
  - **elementos.js**: Selectores DOM y elementos de la interfaz
  - **funciones.js**: Funciones utilitarias del proyecto
- **index.html**: Archivo principal con el formulario de contacto
- **README.md**: Documentación del proyecto

## Instalación

No se requiere instalación adicional para utilizar este proyecto.

## Uso

Para visualizar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

```
git clone https://github.com/JMatochePascual/Envio-de-Email.git
```

2. Navega al directorio del proyecto:

```
cd Envio-de-Email
```

3. Abre el archivo `index.html` en tu navegador web preferido

4. Opcionalmente, puedes usar un servidor local como Live Server para una mejor experiencia

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos en orden:

1. Haz un fork del repositorio.

2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature-name
   ```
3. Realiza y confirma tus cambios:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Sube los cambios a tu repositorio:
   ```bash
   git push origin feature-name
   ```
5. Abre un Pull Request desde tu repositorio hacia el proyecto principal

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## Imagen de Rereferencia

![](https://i.postimg.cc/vm4FSCdk/524shots-so.png)

## ¡Visita Nuestro Proyecto!

¿Quieres ver Envio de Emails en acción? ¡Haz clic aquí! 👉 [Visitar Envio de Emails](https://jmatochepascual.github.io/Envio-de-Email/)

Hecho con 💚 por JMCode | ©2025 - Todos los derechos reservados.
