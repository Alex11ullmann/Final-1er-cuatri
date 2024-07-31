"use strict";

var nombre = document.querySelector(".nombre");
var correo = document.querySelector(".correo");
var telefono = document.querySelector(".telefono");
var mensaje = document.getElementById("mensaje");
var telefonostring = telefono.toString();
var datosusuario = [];

let boton = document.querySelector (".boton");
boton.addEventListener("click", guardardatos);

function guardardatos() {
    if (nombre.value != "" && correo.value != "" && telefono.value != "" && mensaje.value != ""){
        if (telefono.value < 15000000 || telefono.value > 15999999) {
            alert ("El numero de telefono es incorrecto");
        }
            if (nombre.value.length < 8) {
                alert ("El nombre y apellido deben tener mas de 7 caracteres");
            }
                if (mensaje.value.length < 15) {
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