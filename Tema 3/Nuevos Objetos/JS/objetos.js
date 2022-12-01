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
    },
    getInfo2: ()=>{`${nombre} tiene ${edad} años`},

    /* ----> Funcion normal*/
    getInfo3: function(){
        return `${this.nombre} tiene ${this.edad} años`;
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
const alumno4 = new Alumnos('Jesus','Calleja', 75);

/*for(let propiedad in alumna) {
    if (typeof(propiedad)==Object){
        for(let valor in propiedad){
            console.log(valor);
        }
    } else{
        console.log(`${alumna[propiedad]}`);
    } 
};*/

alumna.getInfo= function () {
    return `${this.nombre} tiene ${this.edad} años`;
};

console.log(alumna.getInfo3());