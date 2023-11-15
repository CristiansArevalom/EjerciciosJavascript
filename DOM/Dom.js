/*
//Actualmente unicamente se utiliza el metodo .getElementById(), los metodos .getElementsByTagName() y .getElementsByClassName() fueron remplazados por los selectores.
*/
console.log(document.getElementById("descripcion"))
/*
/*Selectores
Se pueden utilizar para encontrar uno o más elementos. 
    -# se utiliza para buscar por id
    -. se utiliza para buscar por clase
    */

//2. Devuelva por consola el elemento asociado al id “descripcion”. Utilice el método querySelector()
console.log(document.querySelector("#descripcion"))
//. Devuelva por consola todos los elementos li en forma de lista. Utilice el método squerySelectorAll()
const elements= document.querySelectorAll("li")
elements.foreach((element)=>console.log(element))