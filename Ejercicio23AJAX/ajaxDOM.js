/**Según lo anterior haga un código que imprima por DOM los elementos del siguiente JSON en 
uns lista no ordenada (ul) https://jsonplaceholder.typicode.com/comments/63 */

//1paso crear la isntancia de ajax y consumir api HHTP
function ejercicio5() {
const ajax = new XMLHttpRequest()
$fragmento = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

//Asignación de los eventos que se vayan a manipular en la petición
ajax.addEventListener("readystatechange",(e)=>{
    if (ajax.readyState !== 4) return; //Cuando el estado sea diferente a 4 el programa no va a retornar ninguna información. Sin este condicional la logica de la programacion se imprimirá en cada cambio de estado

    if(ajax.status>=200 && ajax.status<300){ ////Si la respuesta es satisfactoria
            //2 creando la lista no ordenada y asigandola al body
        const $ul = document.createElement("ul")
        const $h3 = document.createElement("h3")
        $h3.innerText="Solucion ejercicio 5 traer json"
        $fragmento.appendChild($h3)
        $fragmento.appendChild($ul)
        let json = JSON.parse(ajax.responseText)
        for(key in json){//recorre el objeto
            console.log(`Llave: ${key}, Valor: ${json[key]}`)
            const $li = document.createElement("li");//Crea el elemento li 
            $li.innerHTML=`${key}: ${json[key]}`;//Le asigna los valores del objeto al elemento li
            $ul.appendChild($li)

        }
        document.body.appendChild($fragmento)
    } else { //Si la respuesta no es satisfactoria manda un mensaje de error
        let message = ajax.statusText || "Ocurrió un error";
        $lista.innerHTML = `Error ${ajax.status}: ${message}`;
    }

});

/*Abre la petición con el método GET.*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/comments/63");
/*envia la peticioN*/
ajax.send();
}

function ejercicio6() {
    const ajax = new XMLHttpRequest()
    $fragmento = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

    //Asignación de los eventos que se vayan a manipular en la petición
    ajax.addEventListener("readystatechange",(e)=>{
        if (ajax.readyState !== 4) return; //Cuando el estado sea diferente a 4 el programa no va a retornar ninguna información. Sin este condicional la logica de la programacion se imprimirá en cada cambio de estado
        if(ajax.status>=200 && ajax.status<300){ ////Si la respuesta es satisfactoria
                //2 creando la lista no ordenada y asigandola al body
            const $ol = document.createElement("ol")
            const $h3 = document.createElement("h3")
            $h3.innerText="Solucion ejercicio 6 recorrer Array"
            $fragmento.appendChild($h3)
            $fragmento.appendChild($ol)
            let json = JSON.parse(ajax.responseText)
            for(key in json){//recorre el objeto
                console.log(`Llave: ${key}, Valor: ${json[key]}`)
                const $li = document.createElement("li");//Crea el elemento li 
                let elemento=json[key]
                $li.innerHTML=`${elemento.name} -- ${elemento.username} -- ${elemento.website}`;//Le asigna los valores del objeto al elemento li
                $ol.appendChild($li)
    
            }
        } else { //Si la respuesta no es satisfactoria manda un mensaje de error
            let message = ajax.statusText || "Ocurrió un error";
            $lista.innerHTML = `Error ${ajax.status}: ${message}`;
        }
    
    });
    /*Abre la petición con el método GET.*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
/*envia la peticioN*/
ajax.send();
}
ejercicio5()
ejercicio6()