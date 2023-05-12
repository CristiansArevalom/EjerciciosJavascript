/*Elementos
Los elementos hacen referencia a los elementos del documento HTML*/

//Devulve una coleccion de elementos que coincidan con el palametro

/*
Devuelva por consola el elemento asociado al id “descripcion”. Utilice el método 
getElementById()
*/
console.log(document.getElementById("descripcion"));
/*
2. Devuelva por consola el elemento asociado al id “descripcion”. Utilice el método querySelector()
*/
/*Selectores
Se pueden utilizar para encontrar uno o más elementos. 
    -# se utiliza para buscar por id
    -. se utiliza para buscar por clase
    */

console.log(document.querySelector("#descripcion"))
/*
3. Devuelva por consola todos los elementos li en forma de lista. Utilice el método 
querySelectorAll()
*/
const liElements=document.querySelectorAll("li")
console.log(liElements)
/*
4. Devuelva por consola la cantidad de elementos listados con li con el siguiente mensaje.
“Hay cantidadElementos elementos en la lista.”
*/
console.log(document.querySelectorAll("li").length)

/*
e. Genere una lista de todos los elementos li y recorra la lista con ayuda de un ciclo.
*/
const arrayElements=document.querySelectorAll("li").forEach(element => {
    console.log(element.textContent)
});
/*
f. Con ayuda de la propiedad textContent agregue el siguiente parrafo a practica.html.
“En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de 
Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas 
finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis 
programas tuvieron que interactuar con los 12 jueces manteniendo una conversación 
mediante un computador durante cinco minutos en donde se plantean una serie de preguntas 
con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno 
logré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa 
Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 
jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.”
*/
let texto = `En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de 
Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas 
finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis 
programas tuvieron que interactuar con los 12 jueces manteniendo una conversación 
mediante un computador durante cinco minutos en donde se plantean una serie de preguntas 
con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno 
logré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa 
Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 
jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.`

const $dom=document.getElementById("descripcion")
$dom.textContent=`${$dom.textContent} ${texto}`;

//opc2
document.body.appendChild(document.createElement("p")).textContent = texto;

/*
g. Con ayuda de la propiedad innerHTML agregue el siguiente código HTML a practica.html.
<a href="#">Enlace principal</a>
*/
    let $etiqueta=`<a href="#">Enlace principal</a>`
    const $ul = document.querySelector("ul");
    $ul.insertAdjacentHTML("afterbegin",$etiqueta)

/*
h. Agregue el siguiente arreglo a una lista no ordenada a practica.html con el titulo “Meses 
del año”.
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"
*/

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"]
const $meses = document.createElement("ul")
const $h3=document.createElement("h3")
$h3.textContent="Meses del año"
document.body.appendChild($meses)

meses.forEach((mes) => {
    const $mes = document.createElement("li");
    $mes.textContent = mes;
    $meses.appendChild($mes)
});
