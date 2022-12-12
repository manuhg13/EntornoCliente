class Persona{

    static idPersona=100;
    static MAX_AFORO(){
        return 106;
    }

    constructor(nombre,apellidos,edad){
        this.id=++Persona.idPersona;

        (this._nombre[0].toUpperCase() + this._nombre.slice(1))=nombre;
        this._apellidos=apellidos;
        this._edad=edad;
    }
    
    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.slice(1);
    }

    set nombre(nombre){
        this._nombre=nombre[0].toUpperCase() + this._nombre.slice(1);
    }
    get apellidos(){
        return this._apellidos;
    }

    set apellidos(apellidos){
        this._apellidos=apellidos[0].toUpperCase();
        
    }
    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad=edad;
    }

    toString(){
        return `${this.nombre} ${this.apellidos}, ${this.edad} años. ID=${this.id}`; 
    }
}

class Empleado extends Persona{
    static idEmpleados=200;
}

class Cliente extends Persona{
    static idClientes=300;

}