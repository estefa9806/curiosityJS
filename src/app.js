const express = require('express');
const app = express();
require('../views/listadocursos.js');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const crud = require('./crud');
const crudCursos = require('./crudCurso');
const directorioPublico = path.join(__dirname, '../public');
const directorioPartials = path.join(__dirname, '../partials');

app.use(express.static(directorioPublico));
hbs.registerPartials(directorioPartials);
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/registro', (req, res) => {
    res.render('registro');
});

app.get('/ingreso', (req, res) => {
    res.render('ingreso');
});

app.get('/crearCursos', (req, res) => {
    res.render('crearCursos');
});
app.get('/administracion', (req, res) => {
    console.log(req.query);
    crud.listar();
    let estudiante = listaEstudiantes.find(busqueda => busqueda.id == req.query.id);
    if (!estudiante) {
        console.log('Los datos ingresados no son validos');
        res.render('ingreso');
    }
    else {
        if (estudiante.tipo == 'coordinador') {
            res.render('administracion', {
                nombre: estudiante.nombre,
                id: parseInt(estudiante.id),
                correo: estudiante.correo,
                telefono: estudiante.telefono
            });
        }
        else {
            console.log('Los datos ingresados no son validos');
            res.render('ingreso');
        }
    }
});

app.get('/cursos_disponibles', (req, res) => {
    crud.listar();
    let estudiante = listaEstudiantes.find(buscar => buscar.id == req.query.id);
    let cursos = listaCurso.find(busqueda => busqueda.idcurso == req.query.idcurso);
    if (!estudiante) {
        crud.crear(req.query);
        res.render('cursos_disponibles', {
            nombre: req.query.nombre,
            id: parseInt(req.query.id),
            correo: req.query.correo,
            telefono: req.query.telefono
        });
    }else if(!cursos){
        crudCursos.crear(req.query);
        res.render('cursos_disponibles', {
            idcurso: req.query.idcurso,
            nombrecurso: req.query.nombrecurso,
            valor: req.query.valor,
            descripcioncurso: req.query.descripcioncurso,
            modalidad:req.query.modalidad,
            intensidadhoraria:req.query.intensidadhoraria
        });
    }
    else  {
        console.log('Registo invalido');
        res.render('registro');
    }
});

/*app.get('*', (req, res) => {
    res.render('error');
});*/

app.listen(3000, () => {
    console.log("Express server on port 3000");
});