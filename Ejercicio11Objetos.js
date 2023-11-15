/*Clases.
Son una forma de organizar y simplificar el funcionamiento del código de una aplicación
Su sintaxis es la siguiente:
    class nombreClase{
        //propiedades y metodos
    }
Se pueden hacer objetos a partir de las clases de la siguiente forma:
    const nombreObjeto=new nombreClase()    
*/


/*
Los métodos estáticos suelen ser funciones de utilidad, como funciones para crear o clonar objetos, 
mientras que las atributos static son útiles para cachés, configuración fija o cualquier
 otro dato que no necesite replicar entre instancias
*/
class Figura {
    constructor(color) {
        this.color = color
    }
    saludar = function () {
        console.log("hola desde clase figura")
    }

}
const figura1 = new Figura("AZUL");
figura1.saludar();
/*
5. Cree una clase cuadrado que herede de la clase figura la cual tenga los atributos de alto y ancho. 
Sobreescriba el método saludar con el siguiente mensaje:
*/
class Cuadrado extends Figura {
    constructor(alto, ancho, color) {
        super(color);
        this.alto = alto;
        this.ancho = ancho;
    }
    saludar = function () {
        console.log(`Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto}x${this.ancho}`)
    }
}
const cuadrado1 = new Cuadrado(1, 1, "AZUL");
cuadrado1.saludar();

class Circulo extends Figura {
    constructor(radio, color) {
        super(color)
        this.radio = radio;
    }
    saludar = function () {
        console.log(`Hola! Soy un circulo. Mi color es ${this.color} y mi radio es${this.radio}`)
    }
}
const circulo1 = new Circulo(1, "verde");
circulo1.saludar()