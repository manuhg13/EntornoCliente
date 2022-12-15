Number.prototype.moneda=function () {
    return this.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
}

if (Persona.idPersona>=Persona.MAX_AFORO()){
    console.log('AVISO: Hay más de 6 objetos creados.');
}

class Persona{
    
    static idPersona=100;
    static MAX_AFORO(){
        return 106;
    }

    constructor(nombre,apellidos,edad){
        this.id=++Persona.idPersona;

        this._nombre=nombre;
        this._apellidos=apellidos;
        this._edad=edad;
    }
    
    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.slice(1);
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
        return `${this.id}:\n\t\t ${this._nombre} ${this._apellidos}\n\t\tEdad: ${this._edad}`;
        //return `${this._nombre} ${this._apellidos}, ${this._edad} años. ID=${this.id}`; 
    }
}

class Empleado extends Persona{
    static idEmpleados=200;

    constructor(nombre,apellidos,edad,sueldo){
        super(nombre,apellidos,edad);
        super.id=++Empleado.idEmpleados;

        this._sueldo=sueldo;
    }

    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.slice(1);
    }

    set nombre(nombre){
        this._nombre=nombre[0].toUpperCase() + (this._nombre.slice(1)).toLowerCase();
    }


    get apellidos(){
        let arrayApe=Array.from(this._apellidos.split(' '));
        this._apellidos='';
        arrayApe.forEach(palabra => {
            this._apellidos+=palabra[0].toUpperCase() + (palabra.slice(1)).toLowerCase() + ' ';
        });
        return this._apellidos;
    }
    
    set apellidos(apellidos){
        this._apellidos=apellidos;
        let arrayApe=Array.from(this._apellidos.split(' '));
        this._apellidos='';
        arrayApe.forEach(palabra => {
            this._apellidos+=palabra[0].toUpperCase() + palabra.slice(1).toLowerCase() + ' ';
        });
        
    }
    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad=edad;
    }
    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    

    toString(){
        return `Empleado ${super.toString()}\n\t\tSueldo: ${this._sueldo.moneda()}`; 
    }
}

class Cliente extends Persona{
    static idClientes=300;

    constructor(nombre,apellidos,edad){
        super(nombre,apellidos,edad);
        super.id=++Cliente.idClientes;

        this._fecha=this.hoy();
    }
    
    hoy(){
        fecha= new Date();
        const param = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES',param);
    }

    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.slice(1);
    }

    set nombre(nombre){
        this._nombre=nombre[0].toUpperCase() + (this._nombre.slice(1)).toLoweCase();
    }
    get apellidos(){
        let arrayApe=Array.from(this._apellidos.split(' '));
        arrayApe.forEach(palabra => {
            this._apellidos+=palabra[0].toUpperCase() + (palabra.slice(1)).toLoweCase() + ' ';
        });
        return this._apellidos;
    }

    set apellidos(apellidos){
        let arrayApe=Array.from(apellidos.split(' '));
        arrayApe.forEach(palabra => {
            this._apellidos+=palabra[0].toUpperCase() + (palabra.slice(1)).toLoweCase() + ' ';
        });
        
    }
    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad=edad;
    }
    get fecha(){
        return this._fecha;
    }

    set fecha(fecha){
        this._fecha=new Date(fecha);
        const param = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this._fecha=this._fecha.toLocaleDateString('es-ES',param);
    }

    toString(){
        return `Cliente ${super.toString()}\n\t\tRegistro: `
    }

}




