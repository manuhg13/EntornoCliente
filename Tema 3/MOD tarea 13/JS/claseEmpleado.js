Number.prototype.moneda=function () {
    return this.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
}
import { Persona } from "./clasePersona.js";
export class Empleado extends Persona{
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