const fs = require('fs');
listaCurso = [];

const crear = (cursos) => {
    listar();
    let cur = {
        idcurso: cursos.idcurso,
        nombrecurso: cursos.nombrecurso,
        valor: cursos.valor,
        descripcioncurso: cursos.descripcioncurso,
        estado: "Disponible",
        modalidad:cursos.modalidad,
        intensidadhoraria:cursos.intensidadhoraria
    };
    let duplicado = listaCurso.find(cur => cur.idcurso == cursos.idcurso)
    if (!duplicado){
        listaCurso.push(cur);
        guardar();
    }
    else {
        console.log('Un curso ya existe con este id')
    }
}
const guardar = () => {
    let datos = JSON.stringify(listaCurso);
    fs.writeFile('bdCursos.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo cursos creado con éxito');
    })
}
const listar = () => {
    try {
        listaCurso = require('../bdCursos.json');
    }
    catch (error) {
        listaCurso = [];
    }
}
const     eliminar = () => {
    try {
        listaCurso = require('../bdCursos.json');
    }
    catch (error) {
        listaCurso = [];
    }
}
module.exports = {
    crear,
    eliminar,
    listar
}