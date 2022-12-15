export class Persona{
    
    static idPersona=100;
    static MAX_AFORO(){
        return 106;
    }


    constructor(nombre,apellidos,edad){
        if (Persona.idPersona>=Persona.MAX_AFORO()){
            console.log('AVISO: Hay más de 6 objetos creados.');
        }
        this.id=++Persona.idPersona;

        this._nombre=nombre;
        this._apellidos=apellidos;
        this._edad=edad;
    }
    
    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.slice(1).toLowerCase();
    }

    set nombre(nombre){
        this._nombre=nombre[0].toUpperCase() + (this._nombre.slice(1)).toLowerCase();
    }
    get apellidos(){
        let arrayApe=Array.from(this._apellidos.split(' '));
        this._apellidos='';
        arrayApe.forEach(palabra => {
            this._apellidos+=(palabra[0]).toUpperCase() + palabra.slice(1).toLowerCase() + ' ';
        });
        return this._apellidos;
    }

    set apellidos(apellidos){
        this._apellidos=apellidos;
        let arrayApe=Array.from(this._apellidos.split(' '));
        this._apellidos='';
        arrayApe.forEach(palabra => {
            this._apellidos+=(palabra[0]).toUpperCase() + palabra.slice(1).toLowerCase() + ' ';
        });
        
    }
    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad=edad;
    }

    toString(){
        return `${this.id}:\n\t\t${this.nombre} ${this.apellidos}\n\t\tEdad: ${this._edad}`;
         
    }
}