"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");

var nombre = document.getElementById("nombre").Value;
var correo = document.getElementById("correo").Value;
var telefono = document.getElementById("telefono").Value;
var mensaje = document.getElementById("mensaje").Value;
var telefonostring = telefono.toString();
var datosusuario = new Array(nombre, correo, telefonostring, mensaje);

let boton = document.getElementById ("boton");
boton.addEventListener("click", guardardatos);


function guardardatos() {
    fs.writeFileSync("./datosclientes.txt", datosusuario);
    alert("Enviado con exito");
}
