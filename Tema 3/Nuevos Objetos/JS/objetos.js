const alumno = new Object();
alumno.nombre='Jesús';
alumno['apellidos']='De Nazaret';
alumno.edad=33;

console.log(alumno);

const alumna = {
    nombre: 'María',
    apellidos: 'Ayuso',
    edad: 47,
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

console.log(alumno3);