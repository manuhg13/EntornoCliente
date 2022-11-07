let i=1;
function colorear(){
    this.style.backgroundColor='lightblue';
    if (i<=4) {
        this.innerHTML+=`-${i++}`;
    }
}

Array.from(document.getElementById('idTabla').getElementsByTagName('td')).forEach(element=> {
    element.addEventListener('dblclick',colorear);
});