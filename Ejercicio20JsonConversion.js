
/***
 * 4. Según lo anterior haga un código que:
a. Reciba los datos personales (nombre, apellido, correo, teléfono, nacionalidad) de 5 
usuarios en objetos y los pase a formato JSON. Imprima tanto los objetos como los JSON 
generados.
b. Reciba un JSON con información de sus 5 películas favoritas y pase esta información a 
objetos. Imprima los JSON y los objetos generados
 * 
 */

const usuarios=[
    {
        nombre:"nombre1",
        apellido:"apellido1",
        telefono:1234,
        nacionalidad:4564
    },
    {
        nombre:"nombre2",
        apellido:"apellido2",
        telefono:1234,
        nacionalidad:4564
    },
    {
        nombre:"nombre3",
        apellido:"apellido3",
        telefono:1234,
        nacionalidad:4564
    },
    {
        nombre:"nombre4",
        apellido:"apellido4",
        telefono:1234,
        nacionalidad:4564
    },
    {
        nombre:"nombre5",
        apellido:"apellido5",
        telefono:1234,
        nacionalidad:4564
    },
]
console.log(typeof(usuarios[1]))
usuarios.forEach((usuario)=>console.log((usuario)))
const jsonUsuario=JSON.stringify(usuarios)
console.log(typeof(jsonUsuario))
console.log((jsonUsuario))

/**
 * /*JSON (JavaScript Object Notation).
Es básicamente una notación que es comúnmente utilizada para el intercambio de información

//JSON.parse(str). Convierte el JSON a un objeto y lo devuelve.

console.log("-----------Conversión de JSON a un Objeto----------------")

//JSON
const jsonUsuario = `{
  "nombre": "Mariana",
  "edad": 36
}`;

const usuario = JSON.parse(jsonUsuario); //Conversion con el método parse(JSON)
console.log(`Hola! Soy ${usuario.nombre} y tengo ${usuario.edad}`) //Impresión del objeto

console.log("-----------Conversión de un Objeto a JSON----------------")

//Objeto persona
const persona = { 
    nombre: "Mariana",
    edad: 36,
    amigos: ["Juan", "Fernanda", "José"]
  };

//JSON.stringify(obj). Convierte un objeto Javascript a JSON y la devuelve.
const jsonPersona = JSON.stringify(persona); //Conversión del objeto a json
console.log(jsonPersona) //Impresion del json
 */