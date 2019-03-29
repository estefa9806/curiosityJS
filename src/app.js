const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const crud = require('./crud');
//require('./helpers');

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

app.get('/cursos_disponibles', (req, res) => {
    console.log(req.query);
    crud.crear(req.query);
    res.render('cursos_disponibles', {
        nombre: req.query.nombre,
        id: req.query.id,
        correo: req.query.correo,
        telefono: req.query.telefono
    });
});

app.get('*', (req, res) => {
    res.render('error');
});

app.listen(3000, () => {
    console.log("Express server on port 3000");
});