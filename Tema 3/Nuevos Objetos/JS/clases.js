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

const tele = new Productos('Samsung 42"','TV',4,300);
const tele2 = new Productos('Toshiba 32"','TV',4,250);
const tele3 = new Productos('Xiaomi 50"','TV',4,540);

console.log(tele.getInfo());
console.log(tele2.getInfo());
console.log(tele3.getInfo());