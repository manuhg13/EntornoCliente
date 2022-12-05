console.clear();
Number.prototype.moneda=function () {
    return this.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
}

class Productos{
    constructor(nombre,categoria,unidades,precio,tamanio){
        this.nombre= nombre;
        this.categoria= categoria;
        this.unidades= unidades;
        this.precio= precio;
        this.tamanio= tamanio;
    }

    importe(){
        return this.unidades*this.precio;
    }
    getInfo(){
        return `${this.nombre} ${this.tamanio} - ${this.categoria} | uds: ${this.unidades} | a ${(this.precio).moneda()}`
    }

}

let arrayProductos=[];
arrayProductos[0] = new Productos('Samsung','TV',10,300.95, 42);
arrayProductos[1] = new Productos('Toshiba','TV',2,250.99, 32);
arrayProductos[2] = new Productos('Xiaomi','TV',4,540.43, 50);
arrayProductos[3] = new Productos('Sony','TV',5,940.43, 55);
arrayProductos[4] = new Productos('Hisense','TV',7,740.43, 60);

//Las funciones

let porNombre=prodSortByName(arrayProductos);
console.log(porNombre);

function prodSortByName(arrayProd) {
    return arrayProd.sort(function (a,b) {
        if (a.nombre < b.nombre) return 1;
        if (a.nombre > b.nombre) return -1;
        return 0;

    });
}

//--------------------------------------------------------------------

let porPrecio=prodSortByPrice(arrayProductos);
console.log(porPrecio);

function prodSortByPrice(arrayPro) {
    return arrayPro.sort((a,b)=> a.precio-b.precio);
}

//-------------------------------------------------------------------------
let porPrecioTotal=prodTotalPrice(arrayProductos);
console.log(porPrecioTotal);
function prodTotalPrice(arrayProductos) {
    let arrayImportes=[];
    arrayProductos.forEach(prod => {
        arrayImportes.push((prod.importe()).moneda());
    });
    return arrayImportes;
}
//----------------------------------------------------------------------------
let porPocasUnidades=prodsWithLowUnits(arrayProductos,5);
console.log(porPocasUnidades);
function prodsWithLowUnits(array,uds=5) {
    let arrayDisponibles=[];
    array.forEach(prod => {
        if(prod.unidades< uds){
            arrayDisponibles.push(prod);
        }
    });
    return arrayDisponibles;
}
//----------------------------------------------------------------------------
prodList(arrayProductos);
function prodList(arrayP) {
    console.log("Lista de productos");
    arrayP.forEach(prod => {
        console.log(prod.getInfo());
    });
}