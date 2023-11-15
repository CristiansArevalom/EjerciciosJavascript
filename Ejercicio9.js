/*Funciones expresadas o anonimas.
Las funciones expresadas hacen parte del ámbito concreto del programa, es decir, estas funciones no existen hasta que la expresión que las genera es ejecutada. Se consideran una buena practica de programación para tener el código ordenado*/

console.log("--------------------Función Expresada-----------------------");
const funcionExpresada = function(){
    return console.log("Esta es una función expresada!");
}

funcionExpresada();
/*Funciones anonimas autoejecutables (IIFE).
Son funciones que se ejecutan al momento de crearlas. Su sintaxis es la siguiente:
(function (parametros){//contenido de la funcion})(parametros);
*/

/**
 * 4. Según lo anterior haga un código que con funciones expresadas haga una función relacion(a, b) 
que a partir de dos números cumpla lo siguiente:
a. Si el primer número es mayor que el segundo, debe devolver 1.
b. Si el primer número es menor que el segundo, debe devolver -1.
c. Si ambos números son iguales, debe devolver un 0
 */
const valorNum=function(num1,num2){
    value=0;
    if (num1>num2){
        value=1
    }else if(num1<num2){
        value =-1
    }else{
        value=0
    }
    return value;
}
console.log(valorNum(2,2));
/*
5. Realizar un código con funciones anónimas autoejecutables realice un algoritmo que diga si un 
número entero positivo es par o no. Utilice la operación módulo.
*/
console.log((function (num){
    msg=""
    if(num%2===0){
        msg=`El numero ${num} es par`
    }else{
        msg=`El numero ${num} es impart`
    }
    return msg
})(12));

(function (num){
    return num%2===0 ?  msg=`El numero ${num} es par` :  msg=`El numero ${num} es impar`
})(-1,console.log);
