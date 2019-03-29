const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    let est = {
        id: estudiante.id,
        nombre: estudiante.nombre,
        correo: estudiante.correo,
        telefono: estudiante.telefono,
        tipo: "aspirante"
    };
    let duplicado = listaEstudiantes.find(nom => nom.id == estudiante.id)
    if (!duplicado){
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
    }
    else {
        console.log('Ya existe un estudiante con ese ID')
    }
}

module.exports = {
    crear
}