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

const mostrar = () => {
    listar();
    console.log('Todos los estudiantes');
    listaEstudiantes.forEach(est => {
        console.log('cedula: ' + est.id);
        console.log('nombre: ' + est.nombre);
        console.log('correo: ' + est.correo);
        console.log('tel   : ' + est.telefono + '\n');
    })
}

const actualizar = (id, nom, correo, tel, tipo) => {
    listar();
    let encontrado = listaEstudiantes.find(buscar => buscar.id == id);
    console.log('id (entrada): ' + id);
    console.log('nom (entrada): ' + nom);
    console.log('correo (entrada): ' + correo);
    console.log('tel (entrada): ' + tel);
    console.log('tipo (entrada): ' + tipo);
    console.log('id encontrado: ' + encontrado.id);
    console.log('nombre encontrado: ' + encontrado.nombre);
    console.log('correo encontrado: ' + encontrado.correo);
    console.log('telefono encontrado: ' + encontrado.telefono);
    console.log('tipo encontrado: ' + encontrado.tipo);
    if(!encontrado){
        console.log('No existe este estudiante');
    }
    else {
        encontrado["nombre"] = nom;
        encontrado["correo"] = correo;
        encontrado["telefono"] = tel;
        encontrado["tipo"] = tipo;
        guardar();
    }
}

const eliminar = (id) => {
    listar();
    //console.log(listaEstudiantes);
    let nuevo = listaEstudiantes.filter(est => est.id != id);
    //console.log(nuevo);
    if(nuevo.length == listaEstudiantes.length){
        console.log('No se encontró un estudiante con este ID');
    }
    else{
        listaEstudiantes = nuevo;
        guardar();
        console.log('El estudiante se eliminó con exito');
    }
}

module.exports = {
    crear,
    guardar,
    listar,
    mostrar,
    actualizar,
    eliminar
}