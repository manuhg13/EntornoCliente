const idTimeout = setTimeout(() => {
    console.log("Timeout que se ejecuta al cabo de 5 seg");
}, 5000);

let i=1;
const idInterval=setInterval(() => {
   console.log(`Interval cada 3 seg Ejecucion nº ${i++}`);
   if (i===5) {
        clearInterval(idInterval);
        console.log(`Fin del intervalo`);
   } 
}, 3000);