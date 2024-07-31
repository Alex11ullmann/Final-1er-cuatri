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
                    <input type="number" class="cantAComprar" value="0" min="0" max="${stock[i]}" onkeypress="return validarTecla(event)">
                    <p>${precios[i]}</p>
                    <p>Stock disponible</p>
                    <p>${stock[i]}</p>
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
    let stockRestante = 0; 
    let sumaTotalDeTodosLosInputs = 0;
    cantAComprar.forEach(CantidadElegidaPorUsuario => {
        let PrecioDeCadaProducto = CantidadElegidaPorUsuario.nextElementSibling.innerHTML;
        let stockInicialDeLosProductos = CantidadElegidaPorUsuario.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        stockRestante = stockInicialDeLosProductos - CantidadElegidaPorUsuario.value;
        if (CantidadElegidaPorUsuario.value < 0 ){       
            alert ("Ingreso uno o varios valores incorrectos, vuelva a comprar");
            location.reload();
        }
        if (stockRestante < 0) {
            let nombreDelProducto = CantidadElegidaPorUsuario.previousElementSibling.innerHTML;
            alert ("Excedio el limite de stock del producto: " + nombreDelProducto + " La cantidad disponible es: " + stockInicialDeLosProductos + ", puede pagar ese total o volver a cargar la pagina y volver a comprar");
            stockRestante = 0;
            sumaTotalDeTodosLosInputs = stockRestante * PrecioDeCadaProducto;
            CantidadElegidaPorUsuario.value = stockInicialDeLosProductos;
        }
        CantidadElegidaPorUsuario.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = stockRestante;
        sumaTotalDeTodosLosInputs += CantidadElegidaPorUsuario.value * PrecioDeCadaProducto;
        totalAPagar.innerHTML = sumaTotalDeTodosLosInputs;
        CantidadElegidaPorUsuario.disabled = true;
        descuentoEfectivo();
        descuentoTarjeta ();
        descuentoApp ();
    }); 
    botonigual.disabled = true;
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