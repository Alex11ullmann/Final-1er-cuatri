"use strict";

var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var mensaje = document.getElementById("mensaje");
var telefonostring = telefono.toString();
var datosusuario = [];

let boton = document.getElementById ("boton");
boton.addEventListener("click", guardardatos);

function guardardatos() {
    datosusuario [0] = nombre.value;
    datosusuario [1] = " " + correo.value;
    datosusuario [2] = " " + telefono.value;
    datosusuario [3] = " " + mensaje.value;

    let blob = new Blob([datosusuario], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Datosdeusuario.txt");
    alert("Enviado con exito");

}
