//Operadores javascript
let a=1;
let b=2;
let c=3;

let operacion1=(a*b)/c;
let operacion2=(b+c)*a
let operacion3=(a/b)-(a+c)

let moduloPar = a%2;

let incremento2=+2;
 
console.log("Tabla de verdad AND")
console.log(`p:${true} && q:${true} = p^q: ${true&&true}`)
console.log(`p:${true} && q:${false} = p^q: ${true&&false}`)
console.log(`p:${false} && q:${true} = p^q: ${false&&true}`)
console.log(`p:${false} && q:${false} = p^q: ${false&&false}`)

console.log("Tabla de verdad OR")
console.log(`p:${true} && q:${true} = pvq: ${true||true}`)
console.log(`p:${true} && q:${false} = pvq: ${true||false}`)
console.log(`p:${false} && q:${true} = pvq: ${false||true}`)
console.log(`p:${false} && q:${false} = pvq: ${false||false}`)


