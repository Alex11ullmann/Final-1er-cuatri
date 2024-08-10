"use strict";

var nombre = document.querySelector(".nombre");
var correo = document.querySelector(".correo");
var telefono = document.querySelector(".telefono");
var mensaje = document.getElementById("mensaje");
var datosusuario = [];

let boton = document.querySelector (".boton");
boton.addEventListener("click", guardardatos);

function guardardatos() {
    if (nombre.value != "" && correo.value != "" && telefono.value != "" && mensaje.value != ""){
        if (nombre.value.length < 8 || nombre.value.length > 25) {
            alert ("El nombre y apellido deben tener mas de 7 caracteres");
            nombre.value.setAttribute = oninput=" ";
        }
        else if (telefono.value < 2284000000 || telefono.value > 2284999999) {
            alert ("El numero de telefono es incorrecto");
        }
        else if (correo.value.length < 11 || correo.value.length > 25) {
            alert ("El correo debe tener mas de 10 caracteres");
        }
        else if (mensaje.value.length < 10) {
            alert ("El mensaje debe contener como minimo 15 caracteres");
        }
        else { 
        datosusuario [0] = nombre.value;
        datosusuario [1] =  "\n" + correo.value;
        datosusuario [2] =  "\n" + telefono.value;
        datosusuario [3] =  "\n" + mensaje.value;
        let blob = new Blob([datosusuario], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "Datosdeusuario.txt");
        alert("Enviado con exito");
        location.reload();
        }
    }
    else {
        alert ("Hay un campo sin completar");
    }
}


// funcion de Chatgpt para solo ingresar numeros

function validarTecla(evt) {
    const code = evt.which || evt.keyCode;
    if (code === 8) {
        // Tecla de retroceso (backspace)
        return true;
    } else if (code >= 48 && code <= 57) {
        // Es un número
        return true;
    } else {
        // Otras teclas
        return false;
    }
}

// funcion de Chatgpt para solo ingresar letras

function validarLetras(event) {
    const input = event.target;
    const valor = input.value;
    const soloLetras = /^[a-zA-Z\s]*$/;
    if (!soloLetras.test(valor)) {
      input.value = valor.replace(/[^a-zA-Z\s]/g, ''); // Elimina caracteres no permitidos
    }}