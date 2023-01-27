const http = new XMLHttpRequest();

/*http.open('PATCH','http://localhost:3000/peliculas/4',false);
http.setRequestHeader("Content-type","application/json");
http.send('{"nombre": "400","director": "Paco Martinez Soria"}');

http.open('GET','http://localhost:3000/peliculas/4',true);
http.send();
http.onreadystatechange=()=> {  
    if (http.readyState===4) {
        if (http.status===200) {
            console.log(JSON.parse(http.responseText));
        }
    }
};
*/
document.getElementById('guardar').addEventListener('click',()=>{
    const datosForm= new FormData(document.getElementById('formulario'));


    console.log(datosForm);
    http.open('POST','http://localhost:3000/peliculas',true);
    //http.setRequestHeader('Content-type','application/json');
    http.send(datosForm);
});


//-------------------------------------------------------------------------

document.getElementById('buscar').addEventListener('click',()=>{
    http.open('GET','http://localhost:3000/peliculas/'+ document.getElementById('id').value,true);
    http.send();
    http.onreadystatechange=()=> {  
    if (http.readyState===4) {
        if (http.status===200) {
            let objeto=JSON.parse(http.responseText);
            document.getElementById('area').innerHTML=Object.values(objeto);
        }
    }
    };
});
