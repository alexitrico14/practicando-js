let form = document.getElementById("formulario");

form.addEventListener("submit", function (event){
    event.preventDefault();
    limpiarErrores();
    // para obtener el texto del input es por ID
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    
    let resultado = validar(nombre, asunto, mensaje);
    
    if (resultado == true) {
        exito();
    }
    
}) 

function limpiarErrores() {
    // los textos de error tienen "class"
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function exito() {
    // Para exito es con "class"
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito!!";
}

function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;

    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
        pasamosLaValidacion = false;
    }

    let validacionAsunto = /[a-zA-Z]+/gim;
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
        pasamosLaValidacion = false;
    }
    let validacionMensaje = /[a-zA-Z]+/gim;
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido";
        pasamosLaValidacion = false;
    }

    return pasamosLaValidacion;
}