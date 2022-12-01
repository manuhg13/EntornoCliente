console.clear();

const alumno = new Object();
alumno.nombre='Jesús';
alumno['apellidos']='De Nazaret';
alumno.edad=33;

console.log(alumno);

const alumna = {
    nombre: 'María',
    apellidos: 'Ayuso',
    edad: 47,
    medidas:{
        altura: 167,
        pie: 37,
    }
}

console.log(alumna);

class Alumnos{
    constructor(nombre,apellidos,edad){

        this.nombre= nombre;
        this.apellidos= apellidos;
        this.edad= edad;
    }
}

const alumno3 = new Alumnos('Pedro','Rebellado', 55);


alumno3.edad=45;
console.log(alumno3.edad);