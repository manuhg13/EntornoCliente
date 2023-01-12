class Cookie{
    constructor(clave,valor){
        this.clave=clave;
        this.valor=valor;
    }
}
let arrayCookies=[];
function getCookies(nombre) {
    let todas=document.cookie;
    let separadas=todas.split(";");
    
    separadas.forEach(cookie => {
        let nueva=cookie.split('=');
        arrayCookies.push(new Cookie(nueva[0].trim(),nueva[1].trim()))
    });

    arrayCookies.forEach(cookie => {
        if (cookie.valor==nombre) {
            return alert("Clave:" + decodeURIComponent(cookie.clave));
        }
    });

    return alert("No existe esta cookie");

}

function borrarCookies() {
    let todas=document.cookie;
    let separadas=todas.split(";");
    
    separadas.forEach(cookie => {
        let nueva=cookie.split('=');
        arrayCookies.push(new Cookie(nueva[0].trim(),nueva[1].trim()))
    });

    arrayCookies.forEach(objeto => {
        document.cookie=`${objeto.clave}=; max-age=0`;
    });
}

let i=1;
function setCookie(nombre) {
    document.cookie=`${(i++).toString()}=` + encodeURIComponent(nombre);
}

setCookie('Carlos');
setCookie('Pedro');
setCookie('Juan');

let nombre=prompt('Busca la cookie:');
getCookies(nombre);


