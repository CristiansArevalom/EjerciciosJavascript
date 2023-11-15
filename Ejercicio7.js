//ciclos
/*
4. Según lo anterior haga un código que:
a. Imprima los números del 10 al 1.
b. Imprima los números pares.
5. Realice un código que sume los números del 1 al 5 e imprima el resultado.
6. Haga un código con while que imprima la tabla de multiplicar del 7.
*/
for (let i=10; i>0;i--){
    console.log(i)
}

for (let i =10; i>=0; i-=2 ){
    console.log(i)
}

let num=0;
for (let i=0; i<=5;i++ ){
    num+=i
}
console.log(num)

let i=1;
while(i<=10){
    console.log(`7 x ${i} = ${7*i}`)
    i++
}