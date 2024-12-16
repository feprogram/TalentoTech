// const formulario = document.getElementById("miFormulario");
// console.log(formulario);

// formulario.addEventListener("submit", evento => {
//     // Prevenir el envío del formulario
//     evento.preventDefault();

//     const nombre = document.getElementById("name").value.trim();
//     const apellido = document.getElementById("apellido").value.trim();
//     const email = document.getElementById("inputEmail1").value.trim();
//     const email2 = document.getElementById("inputEmail2").value.trim();
//     const direccion1 = document.getElementById("inputAddress1").value.trim();
//     const direccion2 = document.getElementById("inputAddress2").value.trim();
//     const ciudad = document.getElementById("inputCity").value.trim();
//     const provincia = document.getElementById("provincia");
//     const cPostal = document.getElementById("inputZip").value.trim();
//     const mensaje = document.getElementById("message").value.trim();

//     // Variables para los mensajes de error
//     const errorNombre = document.getElementById("errorNombre");
//     const errorApellido = document.getElementById("errorApellido"); 
//     const errorEmail1 = document.getElementById("errorEmail1");
//     const errorEmail2 = document.getElementById("errorEmail2");
//     const errorDireccion = document.getElementById("errorDireccion1");
//     const errorLocalidad = document.getElementById("errorLocalidad");
//     const errorCPostal = document.getElementById("errorCPostal");
//     const errorMensaje = document.getElementById("errorMensaje");

//     console.log(nombre);
//     console.log(apellido);
//     console.log(email);
//     console.log(mensaje);
//     console.log(direccion1);

//     // Inicializar validación
//     let formularioValido = true;

//     // Validar nombre

//     if (nombre === "") {
//         //alert ("El nombre es obligatorio")
//         errorNombre.classList.remove("d-none");
//         formularioValido = false;
//     } else {
//         errorNombre.classList.add("d-none");
//     }

//     // Validar apellido
//     if (apellido === "") {
//         //alert ("El apellido es obligatorio")
//         errorApellido.classList.remove("d-none");
//         formularioValido = false;
//     } else {
//         errorApellido.classList.add("d-none");
//     }

//     // Validar email
//     // expresiones regulares
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         errorEmail1.classList.remove("d-none");
//         formularioValido = false;
//     } else {
//         errorEmail1.classList.add("d-none");
//     }

//  // Validar dirección
//  if (direccion1.length < 5) {
//     errorDireccion.classList.remove("d-none");
//     formularioValido = false;
// } else {
//     errorDireccion.classList.add("d-none");
// }

//     // Validar mensaje
//     if (mensaje.length < 10) {
//         errorMensaje.classList.remove("d-none");
//         formularioValido = false;
//     } else {
//         errorMensaje.classList.add("d-none");
//     }

//     // Si el formulario es válido, se puede enviar
//     if (formularioValido) {
//         alert("Formulario enviado correctamente.");
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("miFormulario");
  
    // Campos del formulario
    const nameInput = document.getElementById("name");
    const apellidoInput = document.getElementById("apellido");
    const email1Input = document.getElementById("inputEmail1");
    const email2Input = document.getElementById("inputEmail2");
    const addressInput = document.getElementById("inputAddress1");
    const cityInput = document.getElementById("inputCity");
    const postalInput = document.getElementById("inputZip");
    const messageInput = document.getElementById("message");
  
    // Elementos para mostrar errores
    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido");
    const errorEmail1 = document.getElementById("errorEmail1");
    const errorEmail2 = document.getElementById("errorEmail2");
    const errorDireccion = document.getElementById("errorDireccion1");
    const errorLocalidad = document.getElementById("errorLocalidad");
    const errorCPostal = document.getElementById("errorCPostal");
    const errorMensaje = document.getElementById("errorMensaje");
  
    // Validaciones
    const validateName = () => {
      if (nameInput.value.trim().length < 3) {
        errorNombre.classList.remove("d-none");
        errorNombre.textContent = "El nombre debe tener al menos 3 letras.";
      } else {
        errorNombre.classList.add("d-none");
      }
    };
  
    const validateApellido = () => {
      if (apellidoInput.value.trim().length < 3) {
        errorApellido.classList.remove("d-none");
        errorApellido.textContent = "El apellido debe tener al menos 3 letras.";
      } else {
        errorApellido.classList.add("d-none");
      }
    };
  
    const validateEmail1 = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email1Input.value.trim())) {
        errorEmail1.classList.remove("d-none");
        errorEmail1.textContent = "Ingrese un email válido.";
      } else {
        errorEmail1.classList.add("d-none");
      }
    };
  
    const validateEmail2 = () => {
      if (email1Input.value.trim() !== email2Input.value.trim()) {
        errorEmail2.classList.remove("d-none");
        errorEmail2.textContent = "Los correos no coinciden.";
      } else {
        errorEmail2.classList.add("d-none");
      }
    };
  
    const validateAddress = () => {
      if (addressInput.value.trim() === "") {
        errorDireccion.classList.remove("d-none");
        errorDireccion.textContent = "Debe ingresar una dirección correcta.";
      } else {
        errorDireccion.classList.add("d-none");
      }
    };
  
    const validateCity = () => {
      if (cityInput.value.trim() === "") {
        errorLocalidad.classList.remove("d-none");
        errorLocalidad.textContent = "Debe ingresar una localidad.";
      } else {
        errorLocalidad.classList.add("d-none");
      }
    };
  
    const validatePostal = () => {
      if (postalInput.value.trim() === "") {
        errorCPostal.classList.remove("d-none");
        errorCPostal.textContent = "El Código Postal es obligatorio.";
      } else {
        errorCPostal.classList.add("d-none");
      }
    };
  
    const validateMessage = () => {
      if (messageInput.value.trim().length < 10) {
        errorMensaje.classList.remove("d-none");
        errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
      } else {
        errorMensaje.classList.add("d-none");
      }
    };
  
    // Validaciones en tiempo real
    nameInput.addEventListener("input", validateName);
    apellidoInput.addEventListener("input", validateApellido);
    email1Input.addEventListener("input", validateEmail1);
    email2Input.addEventListener("input", validateEmail2);
    addressInput.addEventListener("input", validateAddress);
    cityInput.addEventListener("input", validateCity);
    postalInput.addEventListener("input", validatePostal);
    messageInput.addEventListener("input", validateMessage);
  
    // Validación al enviar el formulario
    form.addEventListener("submit", (e) => {
      validateName();
      validateApellido();
      validateEmail1();
      validateEmail2();
      validateAddress();
      validateCity();
      validatePostal();
      validateMessage();
  
      // Evita el envío si hay errores visibles
      if (
        !errorNombre.classList.contains("d-none") ||
        !errorApellido.classList.contains("d-none") ||
        !errorEmail1.classList.contains("d-none") ||
        !errorEmail2.classList.contains("d-none") ||
        !errorDireccion.classList.contains("d-none") ||
        !errorLocalidad.classList.contains("d-none") ||
        !errorCPostal.classList.contains("d-none") ||
        !errorMensaje.classList.contains("d-none")
      ) {
        e.preventDefault();
      }
    });
  });
  