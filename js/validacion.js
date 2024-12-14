const formulario = document.getElementById("miFormulario");
console.log(formulario);

formulario.addEventListener("submit", evento => {
    // Prevenir el envío del formulario
    evento.preventDefault();

    const nombre = document.getElementById("name").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("inputEmail1").value.trim();
    const email2 = document.getElementById("inputEmail2").value.trim();
    const direccion1 = document.getElementById("inputAddress1").value.trim();
    const direccion2 = document.getElementById("inputAddress2").value.trim();
    const ciudad = document.getElementById("inputCity").value.trim();
    const provincia = document.getElementById("provincia");
    const cPostal = document.getElementById("inputZip").value.trim();
    const mensaje = document.getElementById("message").value.trim();

    // Variables para los mensajes de error
    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido"); 
    const errorEmail1 = document.getElementById("errorEmail1");
    const errorEmail2 = document.getElementById("errorEmail2");
    const errorDireccion = document.getElementById("errorDireccion1");
    const errorLocalidad = document.getElementById("errorLocalidad");
    const errorCPostal = document.getElementById("errorCPostal");
    const errorMensaje = document.getElementById("errorMensaje");

    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(mensaje);
    console.log(direccion1);

    // Inicializar validación
    let formularioValido = true;

    // Validar nombre

    if (nombre === "") {
        //alert ("El nombre es obligatorio")
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    // Validar apellido
    if (apellido === "") {
        //alert ("El apellido es obligatorio")
        errorApellido.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorApellido.classList.add("d-none");
    }

    // Validar email
    // expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail1.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail1.classList.add("d-none");
    }

 // Validar dirección
 if (direccion1.length < 5) {
    errorDireccion.classList.remove("d-none");
    formularioValido = false;
} else {
    errorDireccion.classList.add("d-none");
}

    // Validar mensaje
    if (mensaje.length < 10) {
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    // Si el formulario es válido, se puede enviar
    if (formularioValido) {
        alert("Formulario enviado correctamente.");
    }
});