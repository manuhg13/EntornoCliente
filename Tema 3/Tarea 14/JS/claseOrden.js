
export class Orden {
    static MAX_PRODUCTOS=5;
    static contadorOrdenes=0;

    constructor(){      
        this.idOrden=++Orden.contadorOrdenes;
        this.productos=[];
        this.contadorProductosAgregados=0;
    }

    agregarProducto(producto){
        if(this.contadorProductosAgregados < Orden.MAX_PRODUCTOS){
            this.productos.push(producto);
            this.contadorProductosAgregados++;
        }else{
            console.log('No puede haber más de ' + Orden.MAX_PRODUCTOS + ' productos');
        }
    }

    calcularTotal(){
        let total=this.productos.reduce((importe, producto)=> importe+=producto.precio ,0);
        return total;
    }

    mostrarOrden(){
        return `------------------------
Orden: ${this.idOrden.toString().padStart(3,'0')}\n\t·${this.productos.reduce((texto,producto)=>texto+=`\n\t·${producto.toString()}`)}
---------------------------
    Total: ${this.calcularTotal().toLocaleString('es-ES',{style: 'currency',currency: 'EUR'})}`;
    }

}