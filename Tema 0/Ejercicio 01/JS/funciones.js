let aceptar= confirm("¿Quieres un café?")



let quiere;

if (aceptar) {
    alert("Toma el café pesado")
    console.log(aceptar)
    document.write("<p>Un café</p>")
} else {
    quiere= prompt("¿Que cojones quieres?")
    console.error(aceptar)
}

console.log(quiere);
document.write("<p>" + quiere + "<p>")


