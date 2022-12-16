import { Orden } from "./claseOrden.js";
import { Producto } from "./claseProducto.js";

let p1=new Producto('Camisa',36.5);
let p2=new Producto('Chacqueta',214,99);
let p3=new Producto('Pantalón',67);

let orden1=new Orden();

orden1.agregarProducto(p1);
orden1.agregarProducto(p2);
orden1.agregarProducto(p3);

let orden2= new Orden();

p2.precio=160;

orden2.agregarProducto(p3);
p2.nombre='Americana';
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
console.log(orden1.mostrarOrden());
console.log(orden2.mostrarOrden());