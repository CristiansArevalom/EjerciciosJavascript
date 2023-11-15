/**
 * /*Arreglos (Arrays)
Son una colección de elementos o cosas. se definen con corchetes [] o creando una instancia de Array

 * 4. Según lo anterior haga un código que tenga un arreglo de 5 posiciones en donde guarde las 
siguientes películas.
a. La milla verde
b. Parásitos
c. El viaje de Chihiro
d. Coco
e. Interstellar
Con un ciclo recorralo e imprimalo en pantalla con el siguiente mensaje:
“Película #posicion+1: nombrePelicula”
*/

const peliculas=["La milla verde","Parásitos","El viaje de Chihiro","Coco","Interstellar"];
//recorriendo array con for y for each

for(let i=0 ; i<peliculas.length;i++){
    console.log(`Pelicula ${i}: ${peliculas[i]}`)
}
peliculas.forEach(pelicula=>{
    console.log(pelicula)
})
//for of
for(const pelicula of peliculas){
    console.log(pelicula);
}


