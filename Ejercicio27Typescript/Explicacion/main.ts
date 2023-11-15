/*Al igual que en JavaScript tenemos let, var y const.
A diferencia de JavaScript se puede definir el tipo de dato que va a recibir la variable.
    -let a:string
    -let a:number
    -let a:boolean
    -let a:any

    ** para hacer funcionar typescriot
    1) se debe tener installado node.js para usar el gestor d epaquetes
    2) se debe tener instalado typescriot .(npm install -g typescript )
    3) Se debe iniciar typescriot con tsc -init}
    4) para traspilar (es como comilar pero de alto a alto nivel. de typescriot a json)typescript se debe usar en la linea de comandos en donde este el archivo que se genero por el tsc-init
    el  comando tsc
    5)se deberia transpilar de typescript a
*/

//Variables
console.log("Entro")
let hola:string = "Hola mundo!"
let a:number=6
let verdader:boolean=true
//Any es el tipo de dato en donde se puede meter cualquier dato
let cualquierValor:any="Variable que recibe cualquier dato"

// Constantes

const PI:number=3.1416

console.log(hola, a, PI)

//Arrays

let dias:string[]=["Lunes", "Martes", "Miercoles", "Viernes", "Sabado", "Domingo"]

