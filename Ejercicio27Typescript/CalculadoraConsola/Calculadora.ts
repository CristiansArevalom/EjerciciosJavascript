let num1:number=1;
let num2:number=2;

function suma(num1:number,num2:number):number{
    return num1+num2;
}
function resta(num1:number,num2:number):number{
    return num1-num2;
}
function multiplicacion(num1:number,num2:number):number{
    return num1*num2;
}
function division(num1:number,num2:number):number{
    if(num2==0){
        throw new Error("No se puede dividir por cero");
    }
    return num1/num2;
}
console.log("Calculadora para numeros ",num1,num2)
console.log("suma: ",suma(num1,num2));
console.log("Resta: ",resta(num1,num2));
console.log("Multiplicacion: ",multiplicacion(num1,num2));
console.log("Division: ",division(num1,num2));