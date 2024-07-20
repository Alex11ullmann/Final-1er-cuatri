"use strict";

const productos = ["Papel higienico Simple Hoja x4 un.", "Hamburguesas Paty de carne x4 un.", "Bocaditos de pollo x 800g", "Desodorante Axe x 150ml - Canela y Ambar", "Papas Mc Cain x 700g", "Lata cerveza Miller x1 un.", "Cepillo de Dientes Colgate x1 un.", "Pan Hamburguesas Fargo x4 un.", "Gaseosa Pomelo Schweppes Zero x2,25 lt", "Gaseosa Coca Cola x2,25 lt", "Barra desodorante Old Spice x50 g", "Fernet Branca x750 ml"];
const precios = [1090, 2790, 5490, 1990, 2900, 1200, 745, 1535, 2900, 3100, 5820, 9900];
const urlimagenes = ["../ZImag/ph.webp", "../ZImag/hamb.webp", "../ZImag/patitas.webp", "../ZImag/aerosol.webp", "../ZImag/papas.webp", "../ZImag/lata cer.webp", "../ZImag/cepillo dientes.webp", "../ZImag/pan hambur.webp", "../ZImag/pomelo.webp", "../ZImag/coca.webp", "../ZImag/barra.webp", "../ZImag/fernet.webp"];
const textoalter = ["papel higienico", "hamburguesas", "patitas de pollo", "desodorante en aerosol", "papas snack", "lata de cerveza", "cepillo de dientes", "pan de hamburguesa", "gaseosa pomelo", "coca cola", "aerosol en barra", "fernet"];

//Aca creo la tarjeta
let tarjetagrande = document.getElementById ("tarjetaconimagen");

function creartarjetagrande () {
    for (let i = 0; i < urlimagenes.length; i++) {
    tarjetagrande.innerHTML += `<div>
    <img src="${urlimagenes[i]}" alt="${textoalter[i]}"> 
    <div class="botones">
    <p>${productos[i]}</p>
    <button type="button" id="botonresta${[i]}">-</button>
    <input type="text" id="total${[i]}" value="0">
    <button type="button" id="botonsuma${[i]}" >+</button>
    <p> $ ${precios[i]}</p>
    <p>Total</p>
    <p>$ <input type="text" id="preciototal${[i]}" value="0"></p>
    </div>
    </div>`;
}
}

creartarjetagrande();


//funcion para que el boton me sume

var total = document.getElementById ("total");
let nuevototal = total.value;

var botonsuma = document.getElementById ("botonsuma");
botonsuma.addEventListener ("click", sumar1);

function sumar1 () {
    nuevototal = String(Number(nuevototal) + 1);
    total.value = nuevototal;
    multiplicar();
}

//funcion para que el boton me reste

var botonresta = document.getElementById ("botonresta");
botonresta.addEventListener ("click", restar1);

function restar1() {
    if (nuevototal> 0) {
        nuevototal = String(Number(nuevototal) - 1);
        total.value = nuevototal;
    }
    else
        total.value = nuevototal;
    multiplicar();
}

//aca va el precio total de cada producto

let preciototal = document.getElementById ("preciototal");
let preciototalnuevo = preciototal.value;

function multiplicar (){
    preciototalnuevo = String (Number(nuevototal)) * precios[0];
    preciototal.value = preciototalnuevo;
}

//aca va el resultado de la suma de todos los productos

