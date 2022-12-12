class Persona{

    static identificador=100;
    constructor(){
        this.id=++Persona.identificador;

        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
    }

    toString(){
        return `${this.nombre} ${this.apellidos}, ${this.edad} años. ID=${this.id}`; 
    }
}

class Empleado extends Persona{

}

class Cliente extends Persona{

}