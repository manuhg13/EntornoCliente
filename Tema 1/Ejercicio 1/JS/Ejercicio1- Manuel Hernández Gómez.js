let numeroAzar = Math.floor(Math.random() * (100) + 1);
let introducido;
let intentos = 10;

//Para comprobar el número en la consola
console.log("El nº es: " + numeroAzar);

introducido = prompt("Adivina el número comprendido entre 1 y 100 (tienes 10 intentos): ");
intentos--;

while (introducido!=numeroAzar && introducido!=null && intentos!=0) {

    if (introducido > numeroAzar) {
        introducido = prompt("El número es MENOR, te quedan " + intentos + " intentos");
    } else if (introducido < numeroAzar ) {
        introducido = prompt("El número es MAYOR, te quedan " + intentos + " intentos");
    } 
    intentos--;

}

if (introducido == numeroAzar){
    alert("ENHORABUENA HAS GANADO!!!!, el número era: " + numeroAzar + "(en el intento " + intentos);
} else if (introducido == null) {
    alert("Juego acabado ");
} else if (intentos==0){
    alert("Has acabado los intentos borrego");
}