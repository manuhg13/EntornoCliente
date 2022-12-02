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

function prodSortByName(arrayProductos) {
    return arrayProductos.sort((a,b)=> (a.nombre).localeCompare(b.nombre));
}

//--------------------------------------------------------------------

let porPrecio=prodSortByPrice(arrayProductos);
console.log(porPrecio);

function prodSortByPrice(arrayProductos) {
    return arrayProductos.sort((a,b)=> a.precio-b.precio);
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
function prodsWithLowUnits(arrayProductos,uds=5) {
    let arrayDisponibles=[];
    arrayProductos.forEach(prod => {
        if(prod.unidades< uds){
            arrayDisponibles.push(prod);
        }
    });
    return arrayDisponibles;
}

function prodList(arrayProductos) {
    console.log("Lista de productos");
    arrayProductos.forEach(prod => {
        
    });
}