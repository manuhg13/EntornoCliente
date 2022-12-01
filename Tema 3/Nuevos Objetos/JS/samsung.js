console.clear();
const tvSamsung ={
    nombre: 'TV Samsung 42"',
    categoria: 'Televisores',
    unidades: 4,
    precio: 345.95,

    importe: function () {
        return `${this.nombre} : ${(this.unidades*this.precio).toLocaleString('es-ES',{style: 'currency',currency: 'EUR'})}`;
    }

}

console.log(tvSamsung.importe());
