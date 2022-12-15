console.clear()
Number.prototype.moneda=function () {
    return this.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
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

class Empleado extends Persona{
    static idEmpleados=200;

    constructor(nombre,apellidos,edad,sueldo){
        super(nombre,apellidos,edad);
        super.id=++Empleado.idEmpleados;

        this._sueldo=sueldo;
    }
    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    

    toString(){
        return `Empleado ${super.toString()}\n\t\tSueldo: ${this.sueldo.moneda()}`; 
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
        let fecha= new Date();
        return fecha.toLocaleDateString('es-ES');
    }

    get fecha(){
        return this._fecha;
    }

    set fecha(fecha){
        this._fecha=new Date(fecha);
        this._fecha=this._fecha.toLocaleDateString('es-ES');
    }

    toString(){
        return `Cliente ${super.toString()}\n\t\tRegistro: ${this.fecha} `
    }

}
if (Persona.idPersona>=Persona.MAX_AFORO()){
    console.log('AVISO: Hay más de 6 objetos creados.');
}

let persona1= new Persona('carlos','fernandez Guijarro',45);
console.log(persona1.toString());
let empleado1= new Empleado('Antonio','Perez estevez',33,20000);
console.log(empleado1.toString());
let cliente1= new Cliente('Lydia','Balenziaga Ounahi',27);
console.log(Persona.idPersona);
cliente1.fecha='25-12-2022';
console.log(cliente1.toString());



