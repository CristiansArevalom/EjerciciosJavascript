"use strict";
let num1 = 1;
let num2 = 2;
function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multiplicacion(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 == 0) {
        throw new Error("No se puede dividir por cero");
    }
    return num1 / num2;
}
console.log(suma(num1, num2));
console.log(resta(num1, num2));
console.log(multiplicacion(num1, num2));
console.log(division(num1, num2));
