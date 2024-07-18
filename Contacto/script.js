"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");

var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var mensaje = document.getElementById("mensaje");
var telefonostring = telefono.toString();
var datosusuario = new Array(nombre, correo, telefonostring, mensaje);

let boton = document.getElementById ("boton");
boton.addEventListener("click", guardardatos);


function guardardatos() {
    fs.writeFileSync("./datosclientes.txt", datosusuario);
    alert("Enviado con exito");
}
