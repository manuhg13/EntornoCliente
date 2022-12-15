import { Persona } from "./clasePersona.js";
export class Cliente extends Persona{
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