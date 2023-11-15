//estructuras de control
let num1=1;
let num2=2;
let num3=3;

/*
Según lo anterior haga un código que dados tres números, 
evalúe cual es el número mayor. 
Imprimalos en consola ordenados.*/

if(num1>num2 && num1>num3){
    console.log(`El numero ${num1} es mayor a ${num2} y ${num3} `)
}else if(num2>num1 && num2>num3){
    console.log(`El numero ${num2} es mayor a ${num1} y ${num3} `)
}else if(num3>num1 && num3>num2){
    console.log(`El numero ${num3} es mayor a ${num2} y ${num1} `)
}else{
    console.log("ningun numero es mayor")
}

//Haga un código que evalúe si un número es par o impar
let num4=4;
if(num4%2==0){
    console.log("El numero es par")
}else{
    console.log("el numero es impar")
}
/*
6. Realice un código que resuelva el siguiente planeamiento:
a. Una tienda comenzó una oferta para ventas al
i.20% Para compras mayores a 10 docenas.
ii.15% Para compras mayores o iguales a 5 docenas.
iii.10% Para compras mayores a 1 docena.
Se desea determinar cuál es descuento dado una cantidad de decenas que se van a 
comprar. Imprima tambien cual es el valor de la compra si cada docena cuesta 60.000
*/

let cantidadDocenas=20;
let valorDocena=60000
let valorTotal=0;
if(cantidadDocenas>0 && cantidadDocenas<1){
    valorTotal=(cantidadDocenas*valorDocena)*0,10;
}else if(cantidadDocenas>=5 && cantidadDocenas<10){
    valorTotal=(cantidadDocenas*valorDocena)*0,15;
}