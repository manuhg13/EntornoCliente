let alumno01={
    nombre: 'Manuel',
    apellido: 'Hernández',
    edad: 25

};

function escribir(persona) {
    console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años `);
}

escribir(alumno01);