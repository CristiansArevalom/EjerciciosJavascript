/**
 Objetos
Los objetos son conjunto de propiedades, en donde las propiedades tienen asociadas un nombre y un valor
4. Según lo anterior haga un código que:
a. Tenga un objeto carro con las siguientes propiedades:
i.Marca.
ii.Modelo.
iii.Año.
iv.Color.
b. Agregue al objeto carro la función de descripción en la cual imprima lo siguiente:
“Hola! Mi marca es marca, soy modelo modelo año y mi color es color”
c. Imprima por consola cada una de las propiedades y funciones.
*/
const carro={
    marca:"Toyota",
    modelo:"veo5",
    año:1995,
    color:"verde",
    descripcion:function(){
        return `Hola! Mi marca es ${this.marca}, soy modelo ${this.modelo} ${this.año} y mi color es ${this.color}`
    }
}
for (const key in carro){
    console.log(`atributo: ${key}, valor: ${carro[key]}`)
}

console.log(carro.descripcion())
