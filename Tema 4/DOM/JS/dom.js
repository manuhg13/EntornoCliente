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
console.log(document.getElementsByName("sexo"));

//7. Los itens de lista de la calse 'important' (sólo los <li>)
console.log(document.querySelectorAll('li.important'));


//----------Ejercicio 2-------------------------//

//1. El primer párrafo que hay dentro del <div> 'lipsum'
let primeroP= divs.firstElementChild;
console.log(primeroP);

//2. El segundo párrafo de 'lipsum'
let segundoP=primeroP.nextElementSibling;
console.log(segundoP);

//3. El último item de la lista 
let lista = document.querySelector('ul');
console.log(lista.lastElementChild);

//4. El elemento label de "Escoge sexo"
let radios=document.getElementsByName("sexo");
console.log(radios[0].parentElement); 

//------------Ejercicio 3---------------//

//1. El innerHTML de la etiqueta "Escoge sexo"
console.log(radios[0].parentElement.innerText); 

//2. El textContent de esa etiqueta
console.log(radios[0].parentElement.textContent); 

//3. El valor del primer input de sexo
console.log(radios[0].value); 

//4. El valor del sexo que este seleccionado 
console.log(document.querySelector('input[name="sexo"]:checked').value); 


