let contador=0; 
let sumaNotas=0.0;


let nota =prompt("Notas de tus examenes:");

while (nota!=null) { 
    nota= parseFloat(nota);
    if (nota>=0 && nota<=10){
        contador++;
        console.log(contador);
        sumaNotas=sumaNotas+nota;
        console.log(sumaNotas);
    } else {
        alert("Nota no númerica")
    }
    
    nota =prompt("Notas de tus examenes:");
}
let media= sumaNotas/contador;
let texto;
switch (true) {
    case (media>=5 && media<7):
        texto="Aprobado";
        break;
    case (media>=7 && media<9):
        texto="Notable";
        break;
    case (media>=9 && media<=10):
        texto="Sobresaliente";
        break;
    default:
        texto="Suspenso"
        break;
}
alert(`La media de estas ${contador} notas es de ${sumaNotas/contador}. Tienes un ${texto}`);


