var nombre="nombre Global";
var apellido="apellido Global";
console.log(nombre +","+ apellido)
{ //creando bloque de codigo
    console.log(nombre)
    let edad = 24;
    let comida = "comida local";
    nombre="nombre local"
    console.log(nombre)
}
console.log(nombre)
//edad=22 error al modificar fuera del bloque,no esta definida
// comida="comida fuera del bloque" error al nmoficiar fuera del bloque
// es recomendable usar let para variables locales o que si alcance no deba ser tan amplio
//como las var