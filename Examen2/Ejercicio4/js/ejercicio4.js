const SERVER = "http://192.168.2.205:4000";

let arrayJugadores=[
    "divJug1",
    "divJug2",
    "divJug3",
    "divJug4"
];

window.addEventListener('load',async function(){
    document.getElementById('reparte').addEventListener('click',async function(){
        const [j1,j2,j3,j4]= await Promise.all([
            reparteMano('jugador1'),
            reparteMano('jugador2'),
            reparteMano('jugador3'),
            reparteMano('jugador4'),
        ])
    })

    j1.forEach((cartas) => renderMano(cartas,arrayJugadores[0]));
    j2.forEach((cartas) => renderMano(cartas,arrayJugadores[1]));
    j3.forEach((cartas) => renderMano(cartas,arrayJugadores[2]));
    j4.forEach((cartas) => renderMano(cartas,arrayJugadores[3]));
})

async function reparteMano(jugador){
    let devolver=[];
    for(let i=0;i<4;i++){
        const response=await fetch(`${SERVER}/naipes/${random(1,40)}?estado=mazo`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                estado:jugador
            })

            
        })
    }
    for(let i=0;i<4;i++){
        const response=await fetch(`${SERVER}/naipes?estado=${jugador}`)

        if (!response.ok){
            throw `Error ${response.status}de la BBDD: ${response.statusText}`
        }
    
        const datos = await response.json();
    
        devolver.push(datos);
    }

    return devolver;   

}

function renderMano(cartas,jugador) {
    let texto=document.createElement('p');

    let mano=cartas.reduce((cadena,carta)=>{cadena+= `${carta.id} de ${carta.palo} |`});

    texto.innerHTML=mano;

    document.getElementById('jugador').appendChild(texto)
}

function random(min,max) {
    return Math.floor((Math.random() * (max - min + 1))+ min);
}