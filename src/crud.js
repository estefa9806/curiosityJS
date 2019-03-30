const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
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
        //console.log(listaEstudiantes);
        guardar();
    }
    else {
        console.log('Ya existe un estudiante con ese ID')
    }
}

const guardar = () => {
    //console.log(listaEstudiantes);
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('database.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo creado con éxito');
    })
}

const listar = () => {
    try {
        listaEstudiantes = require('../database.json');
    }
    catch (error) {
        listaEstudiantes = [];
    }
    //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
}

module.exports = {
    crear,
    guardar,
    listar
}