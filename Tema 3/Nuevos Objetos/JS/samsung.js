console.clear();
Number.prototype.moneda=function () {
    return this.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
}

String.prototype.mayusculas=function () {
    return this.toLocaleUpperCase();
}

const tvSamsung ={
    nombre: 'TV Samsung 42"',
    categoria: 'Televisores',
    unidades: 4,
    precio: 345.95,

    importe: function () {
        return `${(this.nombre).mayusculas()} : ${(this.unidades*this.precio).moneda()}`;
    }

}

console.log(tvSamsung.importe());
