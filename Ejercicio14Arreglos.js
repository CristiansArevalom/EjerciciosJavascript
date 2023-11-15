/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/
/**
 * 4. Según lo anterior haga un código que por medio de un ciclo llene un arreglo con los números 
del 1 al 100 en imprimalo en pantalla
5. Haga un código que guarde los números pares del 1 al 100 en un arreglo e imprimalo en pantalla.
6. Desarrolle un código que reciba un arreglo con 3 números, los ordene e imprima en pantalla en 
orden
 * 
 */
const a=[];
for(i=1;i<=100;i++){
    a.push(i);
    console.log(i);
}
const numPares=[]
for(i=0;i<=100;i+=2){
    numPares.push(i);
    console.log(i)
}

function sortArray(array){
    let orderArray;
    if(Array.isArray(array)){
        orderArray=array.sort()
    }
    return orderArray;
}
array=[3,2,1]
sortArray(array).forEach(ci=>{
    console.log(ci);
})
