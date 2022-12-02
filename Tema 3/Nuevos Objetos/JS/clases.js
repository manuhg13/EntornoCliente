console.clear();
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
        let producto=() => this.categoria + " - "  + this.nombre;
        return `${producto()} : importe total = ${(this.importe()).moneda()}`;
    }
}

const tele = new Productos('Samsung 42"','TV',4,300.95);
const tele2 = new Productos('Toshiba 32"','TV',4,250.99);
const tele3 = new Productos('Xiaomi 50"','TV',4,540.43);
let tienda= [tele,tele2,tele3];

/*tienda.forEach(objeto => {
    console.log(objeto.getInfo());    
});*/

class Productos2 extends Productos{
    constructor(nombre,categoria,unidades,precio,tamanio){
        super(nombre,categoria,unidades,precio);
        this.tamanio= tamanio;
    }

    getInfo(){
        let producto=() => this.categoria + " - "  + this.nombre + " " + this.tamanio + '"';
        return `${producto()} : importe total = ${(this.importe()).moneda()}`;
    }

}

const pro1 = new Productos2('Samsung','TV',4,300.95, 42);
const pro2 = new Productos2('Toshiba','TV',4,250.99, 32);
const pro3 = new Productos2('Xiaomi','TV',4,540.43, 50);

let mediaMark=[pro1,pro2,pro3];

mediaMark.forEach(pro => {
    console.log(pro.getInfo());
});
