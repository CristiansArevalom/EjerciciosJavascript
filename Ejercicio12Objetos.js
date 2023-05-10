/*Metodos
    -Metodo estatico: Permite ser ejecutada sin necesidad de instanciar la clase
    -Metodo Setter: Permite establecer los valores de atributos de nuestra clase
    -Metodo Getter: Permite obtener los valores de los atributos de nuestra clase
*/

class Persona{
    
    constructor(nombre=null,apellido=null,edad=null,nacionalidad=null){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.nacionalidad=nacionalidad;
    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getApellido(){
        return this.apellido;
    }
    set setApellido(apellido){
        this.apellido=apellido;
    }
    get getEdad(){
        return this.edad;
    }
    set setEdad(edad){
        this.edad=edad;
    }
    get getNacionalidad(){
        return this.nacionalidad;
    }
    static personasEnElMundo() {
        return "Hay 8.010.359.063 personas en el mundo";
    }
}

const persona1= new Persona();
persona1.setNombre="nombre1";
persona1.setApellido="apellido1";
persona1.setEdad=24;

console.log(persona1.getNombre+" "+persona1.getApellido+" "+ persona1.getEdad);
console.log(Persona.personasEnElMundo())