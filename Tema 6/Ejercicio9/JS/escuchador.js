function colorear(){
    this.style.backgroundColor='lightblue';
}

Array.from(document.getElementById('idTabla').getElementsByTagName('td')).forEach(element=> {
    element.addEventListener('dblclick',colorear);
});