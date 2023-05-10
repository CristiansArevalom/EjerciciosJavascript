/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------")

const numeros=[1,2,3]
let uno=numeros[0],
dos=numeros[1],
tres=numeros[2]

console.log(uno,dos,tres)

//Con destrucrturacion

console.log("--------------Con destructuración-------------------")

const [one, two, three]=numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(one,two,three)

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica

const persona={
    nombre: "Ana",
    apellido: "Santos",
    edad: 23
}

//const {nombre, apellido, edad}=persona; //deben tener el mismo nombre del la llave del objeto

//console.log(nombre,apellido,edad)

/**
 * 4. Según lo anterior haga un código que tenga un arreglo con los días de la semana y los asigne a 
variables con la siguiente nomenclatura diaUno, …, diaSiete, imprima las variables por consola.
5. Realice un código que cree un objeto mascota y tenga las siguientes propiedades
a. Nombre
b. Edad
c. Tamaño
d. Color
Asigne las propiedades a variables e imprimalos por consola.
 */
const DIAS_SEMANA=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let diaUno=DIAS_SEMANA[0];
let diaDos=DIAS_SEMANA[1];
let diaTres=DIAS_SEMANA[2];
let diaCuatro=DIAS_SEMANA[3];
let diaCinco=DIAS_SEMANA[4];
let diaSeis=DIAS_SEMANA[5];
let diaSiete=DIAS_SEMANA[6];

console.log(`diaUno: ${diaUno},diaDos: ${diaDos},diaTres: ${diaTres},diaCuatro: ${diaCuatro},diaCinco: ${diaCinco},diaSeis: ${diaSeis},diaSiete: ${diaSiete},`)

const Mascota={
    nombre:"firulais",
    edad:12,
    tamaño:"xl",
    color:"Azul"
}

//haciendo desustructuracion para asignar datos de manera directa,
const {nombre,edad,tamaño,color}=Mascota //deben tener el mismo nombre del la llave del objeto
console.log(nombre,edad,tamaño,color)
