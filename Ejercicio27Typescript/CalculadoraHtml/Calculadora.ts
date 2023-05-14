//FUNCIONA PARA OPERACIONES BASICAS

var operacionMatematica:string="";
const $numeros = document.querySelectorAll(".number")
const $operadores= document.querySelectorAll(".operator")
const $display = document.querySelector(".display")
const $clearbtn = document.querySelector(".clear")
const $equalsbtn=document.querySelector(".equals")

    $numeros.forEach(numerobtn=>{
      numerobtn.addEventListener('click',()=>{
        operacionMatematica+=numerobtn.textContent;
        $display.textContent=operacionMatematica;
      })
        
    })

    $clearbtn.addEventListener('click',()=>{
        $display.textContent="0";
    })

    $operadores.forEach(operacion=>{
        operacion.addEventListener('click',()=>{
           let ultimoCaracter:string=operacionMatematica.slice(-1);
           if(!isNaN(parseInt(ultimoCaracter))){
            operacionMatematica+=operacion.textContent
            console.log(operacionMatematica)
           }    
        })
    })

    $equalsbtn.addEventListener('click',()=>{
        let resultado:string=(eval(operacionMatematica))
        console.log(resultado)
        $display.textContent=resultado;
        operacionMatematica=""

    })

