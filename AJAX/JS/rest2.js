const SERVER="http://localhost:3000/productos";
const http = new XMLHttpRequest();

    /*document.getElementById('formulario').addEventListener('submit',(event)=>{
        //event.preventDefault();
        let idProd=document.getElementById('id').value
        http.open('GET',`${SERVER}/${idProd}`);
        http.send();
        http.onreadystatechange=()=> {  
    if (http.readyState===4) {
        if (http.status===200) {
            let objeto=JSON.parse(http.responseText);
            document.getElementById('p1').innerHTML=Object.values(objeto);
        }
    }
    };
    });*/
//-------------------------
/*window.addEventListener('load',function () {  
    document.getElementById('form').addEventListener('click',(event)=>{
        let idProd=document.getElementById('id').value
        if (isNaN(idProd) || idProd=='') {
            alert('Debes introducir un número');
        }else{
            getProd(idProd)
            .then((datos)=>{
                document.getElementById('p1').innerHTML=Object.values(datos);
            })

            .catch((error)=> console.error(error))
        }
    });
});
function getProd(id) {
    return new Promise((resolve,reject)=>{
        
        http.open('GET',`${SERVER}/${id}`,true);
        http.send();
        http.addEventListener('load',function(){
            if (http.status===200) {
                resolve(JSON.parse(http.responseText));
            }else{
                reject(`Error ${http.status} (${http.statusText}) ${id}`);
            }
        })
        http.addEventListener('error',()=>{reject('Error en la petición HTTP')});
    })
}
*/
//--------------------------------------------------

/*window.addEventListener('load',()=>{
    $('#formulario').submit(function (evento) { 
        evento.preventDefault();
        let idProd=document.getElementById('id').value;

        if (isNaN(idProd) || idProd.trim()=="") {
            alert("Debes introducir un nº");
        }else{
            fetch(`${SERVER}/${idProd}`)
            .then((response)=>{
                if (!response.ok) {
                    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                }

                return response.json();
            })

            .then((datos)=>{
                document.getElementById('p1').innerHTML=Object.values(datos);
            })

            .catch((error)=>console.error(error));
        }
        
    });
    
})*/

//-------------------------------------

/*$.ajax({
    type: "POST",
    url: "http://localhost:3000/productos",
    data: {id:4,name:"Cascos",descip:"Cascos gamming"},
    dataType: "dataType",
    success: function (datos) {
        console.log("Esta");
    }
});*/