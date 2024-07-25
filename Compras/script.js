"use strict";

let productos = ["Papel higienico Simple Hoja x4 un.", "Hamburguesas Paty de carne x4 un.", "Bocaditos de pollo x 800g", "Desodorante Axe x 150ml - Canela y Ambar", "Papas Mc Cain x 700g", "Lata cerveza Miller x1 un.", "Cepillo de Dientes Colgate x1 un.", "Pan Hamburguesas Fargo x4 un.", "Gaseosa Pomelo Schweppes Zero x2,25 lt", "Gaseosa Coca Cola x2,25 lt", "Barra desodorante Old Spice x50 g", "Fernet Branca x750 ml"];
let precios = [1090, 2790, 5490, 1990, 2900, 1200, 745, 1535, 2900, 3100, 5820, 9900];
let urlimagenes = ["../ZImag/ph.webp", "../ZImag/hamb.webp", "../ZImag/patitas.webp", "../ZImag/aerosol.webp", "../ZImag/papas.webp", "../ZImag/lata cer.webp", "../ZImag/cepillo dientes.webp", "../ZImag/pan hambur.webp", "../ZImag/pomelo.webp", "../ZImag/coca.webp", "../ZImag/barra.webp", "../ZImag/fernet.webp"];
let textoalter = ["papel higienico", "hamburguesas", "patitas de pollo", "desodorante en aerosol", "papas snack", "lata de cerveza", "cepillo de dientes", "pan de hamburguesa", "gaseosa pomelo", "coca cola", "aerosol en barra", "fernet"];
let stock = [20, 15, 5, 25, 40, 25, 20, 7, 18, 13, 9, 3];
let tarjetagrande = document.querySelector(".tarjetaconimagen");


function creartarjetagrande() {
    for (let i = 0; i < urlimagenes.length; i++) {
        tarjetagrande.innerHTML +=
            `<div>
            <img src="${urlimagenes[i]}" alt="${textoalter[i]}"> 
            <div class="botones">
                <p>${productos[i]}</p>
                <input type="number" class="cantAComprar" value="0" min="0" max="${stock[i]}">
                <p>${precios[i]}</p>
                <p>Stock total = ${stock[i]}</p>
            </div>
        </div>`;
    }
}
creartarjetagrande();


let cantAComprar = document.querySelectorAll(".cantAComprar");
let botonigual = document.querySelector(".botonIgual");
let TotalAPagar = document.querySelector(".TotalAPagar");

botonigual.addEventListener ("click", (e)=>{
    let sumatotal =0;    
    cantAComprar.forEach(cantidad => {
        let pPrecio = cantidad.nextElementSibling.innerHTML;
        console.log (pPrecio);
        sumatotal += cantidad.value * pPrecio;
        console.log (cantidad);
        TotalAPagar.innerHTML = sumatotal;
    }); 

});