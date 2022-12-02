Number.prototype.moneda=function () {
    return this.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
}

class Productos{
    constructor (nombre,categoria,unidades,precio){
        this.nombre= nombre;
        this.categoria= categoria;
        this.unidades= unidades;
        this.precio= precio;
    }
    importe(){
        return this.unidades*this.precio;
    }
    getInfo(){
        return `${this.nombre} - ${this.categoria} : importe total = ${(this.importe()).moneda()}`;
    }
}

const tele = new Productos('tvSamsung 42"','TV',4,300);
const tele2 = new Productos('Toshiba 32"','TV',4,250);

console.log(tele.getInfo());
console.log();
console.log();