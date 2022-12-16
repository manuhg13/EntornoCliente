console.clear()
import {Persona} from './clasePersona.js';
import {Cliente} from './claseCliente.js';
import {Empleado} from './claseEmpleado.js';



let persona1= new Persona('carlos','fernandez Guijarro',45);
console.log(persona1.toString());
let empleado1= new Empleado('Antonio','Perez estevez',33,20000);
console.log(empleado1.toString());
let cliente1= new Cliente('Lydia','Balenziaga Ounahi',27);
console.log(Persona.idPersona);
cliente1.fecha='25-12-2022';
console.log(cliente1.toString());



