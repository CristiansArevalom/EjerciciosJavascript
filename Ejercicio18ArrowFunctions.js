/***
 * 4. Según lo anterior haga un código que con arrow functions haga una función comparacion(a, b) 
que a partir de dos números cumpla lo siguiente:
a. Si el primer número es diferente que el segundo, debe devolver 1.
b. Si el primer número es igual que el segundo, debe devolver 0.
5. Con arrow funtions construir las siguientes funciones:
 a. Convierta segundos a minutos e imprima el mensaje:
“Los segundos segundos son equivalentes a minutos minutos”
b. Convierta minutos a horas e imprima el mensaje:
“Los minutos minutos son equivalentes a horas horas”
c. Convierta horas en días e imprima el mensaje:
“Las horas horas son equivalentes a días días”
 * 
 */


const compararNumeros=(num1,num2)=>(num1===num2 ? a=0 : a=1)

console.log(compararNumeros(2,5))

const segundosAMinutos=(segundos)=>(`Los ${segundos} segundos son equivalentes a  ${segundos/60} minutos`)
const minutosAHoras=(minutos)=>(`Los ${minutos} minutos son equivalentes a  ${minutos/60} horas`)
const horasADias=(horas)=>(`Las ${horas} horas son equivalentes a ${horas/24} dias`)

console.log(segundosAMinutos(60))
console.log(minutosAHoras(60))
console.log(horasADias(24))



/***
 * *Arrow Functions.
Nueva forma de definir funciones anonimas que sean expresadas.
    -Estas funciones pueden ser escritas en una sola línea de código.
    -No es necesario escribir la palabra reservada function.
    -No es necesario escribir la palabra reservada return.
    -No necesitas escribir las llaves


//Ejemplo funcion expresada

console.log("-----------Ejemplo función expresada----------------")

const saludar=function(){
    return "Hola!"
}
console.log(saludar())

/*Arrow functions
Su sintaxis es la siguiente:
    const nombreFuncion=(parametros)=>{
        //código función
    }
Cuando la función es de una linea se pueden omitir los corchetes
    const nombreFuncion=()=> //código función


console.log("-----------Ejemplos arrow functions----------------")

const despedir=()=>{ 
    console.log("Adios!") 
}
despedir();

const recibir=()=> console.log("Recibido!");
recibir();

//Parametros dentro de los parentesis o se pueden dejar sin los parentesis si es un solo parametro

const bienvenida=(nombre)=> console.log(`Bienvenido(a) ${nombre}`);
bienvenida("Luna");

const despedida=nombre=> console.log(`Hasta luego ${nombre}`);
despedida("Luna");

//Tambien se evita poner return cuando es solo una linea
const sumar = (a,b) => a+b;
console.log(sumar(8,9));

console.log("-----------Arrow functions en ciclos----------------")

const numeros=[1,2,3,4,5,6]

//Para recorrer el anterior arreglo sin arrow functios se puede hacer de la siguiente manera

console.log("-----------Ejemplo sin Arrow functions---------------")

numeros.forEach(function(num, index){
    console.log(`El elemento ${num} esta en la posicion ${index}`)
})

//Lo anterior se puede transformar en una arrow function

console.log("-----------Ejemplo con Arrow functions---------------")

numeros.forEach((num, index)=>console.log(`El elemento ${num} esta en la posicion ${index}`))
 * 
*/