/*Funcion declarada.
Son funciones que forman parte del ámbito global del programa, que para que se ejecuten se debe hacer un llamado a la función, independientemente de donde se declaren se pueden ser llamadas desde cualquier parte del código.
*/

/*
Según lo anterior haga un código que haga una función declarada para cada una de las siguientes 
operaciones:
a. Suma.
b. Resta.
c. Multiplicación.
d. División.
*/
function suma(num1,num2){
    return num1+num2
}
function resta(num1,num2){
    return num1-num2
}
function multiplicacion(num1,num2){
    return num1*num2
}
function division(num1,num2){
    result=0
    if(num1!=0 && num2!=0){
        result=num1/num2
    }
    return result
}
//Ivocacion de la funcion
num1=1, num2=2
console.log(`Resultado suma ${suma(num1,num2)}`)
console.log(`Resultado resta ${resta(num1,num2)}`)
console.log(`Resultado multiplicación ${multiplicacion(num1,num2)}`)
console.log(`Resultado división ${division(num1,num2)}`)

/*. Construir una función que convierta dólares a pesos colombianos y otra función que convierta 
pesos colombianos a dólares
*/
const DOLAR_COP=4500;
function convertirADolares(cantidadPesos){
    conversion=0;
    if(cantidadPesos>0){
        conversion=cantidadPesos/DOLAR_COP;
    }
    return conversion;
}
function convertirAPesos(cantidadDolares){
    conversion=0;
    if(cantidadDolares>0){
        conversion=cantidadDolares*DOLAR_COP;
    }
    return conversion;
}
console.log(convertirADolares(1000))
console.log(convertirAPesos(1))

/*
Construir un código que tenga una función para cada uno de los siguientes cálculos:
a. Área de un cuadrado.
b. Área de un círculo.
c. Área de un triángulo
*/

function areaCuadrado(lado){
    return lado*lado
}
function areaCirculo(radio){
    return Math.PI*Math.pow(radio,2)
}
function areaTriangulo(base,altura){
    return (base*altura)/2
}

console.log(areaCuadrado(2))
console.log(areaCirculo(2))
console.log(areaTriangulo(2,2))
