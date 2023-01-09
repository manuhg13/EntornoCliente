
let i=1;
function setCookie(nombre) {
    document.cookie=`${(i++).toString()}=` + encodeURIComponent(nombre);
}

setCookie('Carlos');
setCookie('Pedro');
setCookie('Juan');