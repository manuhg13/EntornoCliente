let compra= ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];

compra.splice(1,1);
console.log(compra);

compra.splice(3,0,"Naranjas","Sandía");
console.log(compra);

compra.splice(1,1,"Cerezas","Níspero");
console.log(compra);
