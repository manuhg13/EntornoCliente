const SERVER="http://192.168.2.205:3000";

$('#listar').click(async function (e) { 
    e.preventDefault();
    
    const [catergorias,productos]= await Promise.all([
        getTabla('/categorias'),
        getTabla('/productos')
    ])
});

async function getTabla(tabla) {
    const response = await fetch(`${SERVER}${tabla}`);

    if (!response.ok){
        
    }
}