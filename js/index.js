const botonEnviar = document.getElementById("botonEnviarFormulario");
const ingresarNombre = document.getElementById("name");
const ingresarApellido = document.getElementById("apellido");
const ingresarCorreo = document.getElementById("inputEmail1");
const ingresarCorreo2 = document.getElementById("inputEmail2");
const ingresarDireccion = document.getElementById("inputAddress");
const ingresarDireccion2 = document.getElementById("inputAddress2");
const ingresarCiudad = document.getElementById("inputCity");
const ingresarProvincia = document.getElementById("provincia");
const ingresarCPostal = document.getElementById("inputZip");
const ingresarMensaje = document.getElementById("message");


botonEnviar.addEventListener("click", (evento) => {

        evento.preventDefault();
        let valorNombre = ingresarNombre.value;
        let valorApellido = ingresarApellido.value;
        let valorCorreo = ingresarCorreo.value;
        let valorCorreo2 = ingresarCorreo2.value;
        let valorDireccion = ingresarDireccion.value;
        let valorDireccion2 = ingresarDireccion2.value;
        let valorCiudad = ingresarCiudad.value;
        let valorProvincia = ingresarProvincia.value;
        let valorCPostal = ingresarCPostal.value;
        let valorMensaje = ingresarMensaje.value;

        console.log(valorNombre, valorApellido, valorCorreo,valorCorreo2, valorDireccion, valorDireccion2, valorCiudad, valorCPostal, valorMensaje);
}
)
