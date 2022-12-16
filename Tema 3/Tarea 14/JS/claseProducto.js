export class Producto{
    static contadorProductos=0;

    constructor(nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
        this._idProducto=Producto.contadorProductos; 
    }

    get idProducto(){
        return this._idProducto;
    }
    getidProducto(){
        return this._idProducto;
    }
    
    get nombre(){
        return this._nombre;
    }
    getNombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }
    setNombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        return this._precio;
    }
    getPrecio(){
        return this._precio;
    }

    set precio(precio){
        this._precio=precio;
    }
    setPrecio(precio){
        this._precio=precio;
    }

    toString(){
        return `${this.nombre} ${this.precio.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'})}`;
    }
}