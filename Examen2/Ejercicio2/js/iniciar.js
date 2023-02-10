const SERVER="http://192.168.2.205:4000";

const boton= document.createElement('button');
boton.innerHTML='INICIAR';

let arrayPalos=['OROS','COPAS','ESPADAS','BASTOS'];
let arrayNumeros=[1,2,3,4,5,6,7,10,11,12];
let arrayLugares=['Jugador1','Jugador2','Jugador3','Jugador4','Baraja','Descartes'];

window.addEventListener('load',()=>{
    boton.addEventListener('click', async function () {
        const [palos,naipes,lugar]=await Promise.all([
            postTablaPN('/palos','/naipes'),
            postTablaLugar('/lugar')
        ])
    })

    async function postTablaPalos(palos,naipes) {
        for await (const palo of arrayPalos) {
            for(const numero of arrayNumeros){
                let carta={
                    id:'',
                    palo:palo,
                    carta:numero,
                    lugar:"mazo"
                }
                fetch(`${SERVER}${naipes}`,{
                    method: 'POST',
                    body:JSON.stringify(carta),
                    headers:{
                           'Content-Type': 'application/json'
                    }
                })
                .then((response)=>{
                    if (!response.ok) {
                        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                    }
            
                    return response.json(); 
                })
                .then(datos=>{
                    alert("Datos en naipes bien insertados");
                })
                .catch((error)=>console.error(error));
                
            }
            let obj={
                id:'',
                name:palo
            }
            fetch(`${SERVER}${palos}`,{
                method: 'POST',
                body:JSON.stringify(obj),
                headers:{
                       'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                if (!response.ok) {
                    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                }
        
                return response.json(); 
            })
            .then(datos=>{
                alert("Datos en palos bien insertados");
            })
            .catch((error)=>console.error(error));
        }
       
    }
    async function postTablaLugar(lugar) {
        for await (const lugar of arrayLugares) {
            let obj={
                id:'',
                name:lugar
            }
            fetch(`${SERVER}${lugar}`,{
                method: 'POST',
                body:JSON.stringify(obj),
                headers:{
                       'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                if (!response.ok) {
                    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                }
        
                return response.json(); 
            })
            .then(datos=>{
                alert("Datos bien en lugar insertados");
            })
            .catch((error)=>console.error(error));
        }
       
    }
    
})
document.getElementById('div03').appendChild(boton);