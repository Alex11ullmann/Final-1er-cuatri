import * as fs from "node:fs";

let nombre : string = " ";
let correo : string = " ";
let telefono : number = 0;
let mensaje : string = " ";
let telefonostring: string = telefono.toString();
let datosusuario: string[] = new Array (nombre, correo, telefonostring, mensaje);

function guardardatos () {
    fs.writeFileSync ("./datosclientes.txt", datosusuario[0]);
    console.log ("Enviado con exito");
}
