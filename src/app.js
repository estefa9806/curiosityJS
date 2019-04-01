const express = require('express');
const app = express();
require('./helpers');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const crud = require('./crud');
const crudCursos = require('./crudCurso');
const directorioPublico = path.join(__dirname, '../public');
const directorioPartials = path.join(__dirname, '../partials');
const port = process.env.PORT || 3000;

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

app.get('/eliminar_Est', (req, res) => {
    if (req.query.id != undefined) {
        crud.eliminar(req.query.id);
    }
    res.render('eliminar_est');
});

app.get('/actualizar_Est', (req, res) => {
    res.render('actualizar_est');
});

app.get('/listar_estudiantes', (req, res) => {
    //console.log(req.query.id);
    if (req.query.id != undefined) {
        crud.actualizar(req.query.id, req.query.nombre, req.query.correo, req.query.telefono, req.query.tipo);
    }
    res.render('listar_estudiantes');
});

app.get('/administracion', (req, res) => {
    //console.log(req.query);
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
    } else if (!cursos) {
        crudCursos.crear(req.query);
        res.render('cursos_disponibles', {
            idcurso: req.query.idcurso,
            nombrecurso: req.query.nombrecurso,
            valor: req.query.valor,
            descripcioncurso: req.query.descripcioncurso,
            modalidad: req.query.modalidad,
            intensidadhoraria: req.query.intensidadhoraria
        });
    }
    else {
        console.log('Registo invalido');
        res.render('registro');
    }
});

/*app.get('*', (req, res) => {
    res.render('error');
});*/

app.listen(port, () => {
    console.log("Escuchando en el puerto " + port);
});