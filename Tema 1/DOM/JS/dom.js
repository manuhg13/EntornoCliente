//1. Elemento id `input2`
console.log(document.getElementById('input2'));
console.log(document.querySelector('#input2'));
console.log(document.getElementsByTagName('INPUT')[1]);

//2. La colección de párrafos 
console.log(document.getElementsByTagName('p'));
console.log(document.querySelectorAll('p'));

//3. Lo mismo pero sólo de los párrafos que hay dentro del div 'lipsum'
let divs=document.getElementById('lipsum');
let parrafos= divs.querySelectorAll('p');
console.log(parrafos);

//4. El formulario 
console.log(document.forms);

//5. Todos los INPUTS
console.log(document.querySelectorAll('input'));

//6. Sólo los inputs con nombre sexo
let inputs= document.getElementsByTagName('INPUTS');
console.log(inputs.getElementByName("sexo"));

