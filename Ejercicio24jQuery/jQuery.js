/*jQuery.
La estrucutra basica de seleccion de elementos HTML con jQuery
$("ElementoHTML").metodo()

Es importante poner la funcion que ejecuta los jQuery cuando el documento HTML termina de cargar.
Su estrcutura es la siguiente
    $(function(){
        //código jQuery
    })
*/

/* haga un código con jQuery que:
a. Muestre por consola el HTML de la etiqueta H1.*/
$(function(){
        /*Al igual que en el DOM, con jQuery podemos 
        seleccionar elementos HTML por su etiqueta, id (#) o clase (.).
    Algunos de los métodos que se pueden utilizar en jQuery son:
        -html()
        -insertAfter()
        -insertBefore()
        -hasClass()
        -addClass()
        -attr()
        -clone()
        -hide()
        -show()
        -remove()
        -text()
    Para ver más metodos revise el siguiente enlace https://norfipc.com/codigos/jquery-todos-selectores-eventos-metodos-funciones.php*/

    console.log($("H1").html()) //Método que muesta el contenido HTML de un elemento

/*
b. Compruebe si dentro del elemento li hay una clase llamada “elemento9”. Imprima el 
resultado por consola.
    */
console.log($("li").hasClass("elemento9"))//Método que comprueba si un elemento tiene un nombre de clase especifico.

/*
c. Inserte el siguiente código HTML debajo de la etiqueta H1 y agregale por medio del 
método addClass() la clase “subtitulo”
*/
$("<h2>Dominando métodos jQuery</h2>").insertAfter("H1").addClass("subtitulo")//Metodo que insa elementos HTML despues de un elemento. insertBefore() para insertar antes de un elemento.
   /*

d. Clone el párrafo, muestrelo después de la lista y asígnele por medio del método attr() la clase 
“segundo”.
*/
//$(".mostrar").clone().insertAfter(".mostrar").attr("class", "eliminar").text("Eliminar") //Clona el boton mostrar y lo inserta despues de este. Cambia el nombre de la clase con el metodo attr() y sustituye el cotenido de texto con el metodo text()
$("p").clone().insertAfter("ul").attr("class","segundo")

/*
e. Con el evento click realice sobre el mismo código una lógica que permite ocultar y mostrar 
elementos de la lista
*/
//desde javacript por cada elemento de la lista añadale un boton con una clase personalizada
 // Agrega los botones "Mostrar" y "Ocultar" a cada elemento de la lista

 //No logre hacerlo funcionar..
 $('ul li').each(function() {
    $(this).append('<button class="mostrar">Mostrar</button>');
    $(this).append('<button class="ocultar">Ocultar</button>');
  });

  /*
  // Agrega un evento clic a los botones "Mostrar"
  $(document).on('click', '.mostrar', function() {
    var li = $(this).parent();
    li.children('span').show();
  });

  $(document).on('click', '.ocultar', function() {
    var li = $(this).parent();
    li.children('span').hide();
  });
  */
});

