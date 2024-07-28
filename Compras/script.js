"use strict";

let productos = ["Papel higienico Simple Hoja x4 un.", "Hamburguesas Paty de carne x4 un.", "Bocaditos de pollo x 800g", "Desodorante Axe x 150ml - Canela y Ambar", "Papas Mc Cain x 700g", "Lata cerveza Miller x1 un.", "Cepillo de Dientes Colgate x1 un.", "Pan Hamburguesas Fargo x4 un.", "Gaseosa Pomelo Schweppes Zero x2,25 lt", "Gaseosa Coca Cola x2,25 lt", "Barra desodorante Old Spice x50 g", "Fernet Branca x750 ml"];
let precios = [1090, 2790, 5490, 1990, 2900, 1200, 745, 1535, 2900, 3100, 5820, 9900];
let urlImagenes = ["../ZImag/ph.webp", "../ZImag/hamb.webp", "../ZImag/patitas.webp", "../ZImag/aerosol.webp", "../ZImag/papas.webp", "../ZImag/lata cer.webp", "../ZImag/cepillo dientes.webp", "../ZImag/pan hambur.webp", "../ZImag/pomelo.webp", "../ZImag/coca.webp", "../ZImag/barra.webp", "../ZImag/fernet.webp"];
let textoAlter = ["papel higienico", "hamburguesas", "patitas de pollo", "desodorante en aerosol", "papas snack", "lata de cerveza", "cepillo de dientes", "pan de hamburguesa", "gaseosa pomelo", "coca cola", "aerosol en barra", "fernet"];
let stock = [20, 15, 5, 25, 40, 25, 20, 7, 18, 13, 9, 3];
let tarjetaGrande = document.querySelector(".tarjetaconimagen");


function creartarjetagrande() {
    for (let i = 0; i < urlImagenes.length; i++) {
        tarjetaGrande.innerHTML +=
            `<div>
            <img src="${urlImagenes[i]}" alt="${textoAlter[i]}"> 
            <div class="info">
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
let totalAPagar = document.querySelector(".totalAPagar");

let efectivo = document.querySelector (".efectivo");
let tarjeta = document.querySelector (".tarjeta");
let app = document.querySelector (".app");

botonigual.addEventListener ("click", (e)=>{
    let sumatotal =0;    
    cantAComprar.forEach(cantidad => {
        let pPrecio = cantidad.nextElementSibling.innerHTML; 
        sumatotal += cantidad.value * pPrecio;
        totalAPagar.innerHTML = sumatotal;
        descuentoEfectivo();
        descuentoTarjeta ();
        descuentoApp ();
    }); 
});



function descuentoEfectivo (){
    let total = totalAPagar.innerHTML;
    let descuento = total - (total*30/100);
    efectivo.innerHTML = descuento; 

}

function descuentoTarjeta (){
    let total = totalAPagar.innerHTML;
    let descuento = Number(total) + Number(total*10/100);
    tarjeta.innerHTML = descuento;
}

function descuentoApp (){
    let total = totalAPagar.innerHTML;
    app.innerHTML = total;
}
