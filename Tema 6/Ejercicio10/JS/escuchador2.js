let i=1;
function colorear(){
    this.style.backgroundColor='lightblue';
    let contenido=this.innerHTML;
    let letra= contenido.substr(-1,1);
    this.innerHTML=`${letra}-${i++}`;
    
}

Array.from(document.getElementById('idTabla').getElementsByTagName('td')).forEach(element=> {
    element.addEventListener('dblclick',colorear);
});