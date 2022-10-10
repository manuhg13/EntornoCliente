let numero = prompt("Introduce el número del que hacer el factorial:");
numero= parseInt(numero);
let factorial=1;
let texto="";

for (let i=numero;i>0;i--){
    factorial*=i;
    console.log(factorial);
    if (i!=1){
        texto+=`${i} x `;
    } else {
        texto+=`${i}`;     
    }
   
}
 alert(`El factorial de ${numero} es ${factorial} y se calcula con la siguiente ecuación: \n 
 ${texto} = ${factorial}`);

