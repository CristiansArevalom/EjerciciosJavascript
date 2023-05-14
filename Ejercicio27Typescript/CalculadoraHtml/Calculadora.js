"use strict";
//hacerlo con DOM 
//1Leer numerso y actualizar lo que se meustra en display, cuando ingresen algo de la clase operator el num1 para y entra el num2 hatsa que ingresen algo de operator de neuvo
//los nuemros se deben ir guardando hasta que presionen igual..
var operacionMatematica = "";
const $numeros = document.querySelectorAll(".number");
const $operadores = document.querySelectorAll(".operator");
const $display = document.querySelector(".display");
const $clearbtn = document.querySelector(".clear");
const $equalsbtn = document.querySelector(".equals");
$numeros.forEach(numerobtn => {
    numerobtn.addEventListener('click', () => {
        operacionMatematica += numerobtn.textContent;
        $display.textContent = operacionMatematica;
    });
});
$clearbtn.addEventListener('click', () => {
    $display.textContent = "0";
});
$operadores.forEach(operacion => {
    operacion.addEventListener('click', () => {
        let ultimoCaracter = operacionMatematica.slice(-1);
        if (!isNaN(parseInt(ultimoCaracter))) {
            operacionMatematica += operacion.textContent;
            console.log(operacionMatematica);
        }
    });
});
$equalsbtn.addEventListener('click', () => {
    let resultado = (eval(operacionMatematica));
    console.log(resultado);
    $display.textContent = resultado;
    operacionMatematica = "";
});
