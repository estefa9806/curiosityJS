const hbs =require('hbs');
const crud = require('./crud');

hbs.registerHelper('listar_cursos',()=>
{
    listaCurso=require('../bdCursos.json');
    let texto="<table>\
        <thead>\
        <tr>\
        <th colspan='4'>Promedio estudiantes</th>\
      </tr>\
            <th>id</th>\
            <th>nombre</th>\
            <th>valor</th>\
            <th>estado</th>\
            <th>modalidad</th>\
            <th>intensidadhoraria</th>\
            <th>descripcion</th>\
        </thead>\
        <tbody>";
    listaCurso.forEach(cursos=>{
    texto=texto
    +'<tr>'+
    '<td>' + cursos.idcurso+'</td>'+
    '<td>' + cursos.nombrecurso+'</td>'+
    '<td>' + cursos.valor+'</td>'+
    '<td>' + cursos.estado+'</td>'+
    '<td>' + cursos.modalidad+'</td>'+
    '<td>' + cursos.descripcioncurso+'</td>'+
    '<td>' + cursos.intensidadhoraria+'</td>'+'</tr>'
    });
    texto=texto+'</tbody>'+'</table>';
        return texto;
      
})

hbs.registerHelper('listar_est',()=>
{
    crud.listar();
    let texto="<table>\
        <thead>\
        <tr>\
        <th colspan='4'>Todos los estudiantes</th>\
      </tr>\
            <th>cédula</th>\
            <th>nombre</th>\
            <th>correo</th>\
            <th>telefono</th>\
            <th>tipo</th>\
        </thead>\
        <tbody>";
    listaEstudiantes.forEach(est =>{
    texto=texto
    +'<tr>'+
    '<td>' + est.id + '</td>'+
    '<td>' + est.nombre + '</td>'+
    '<td>' + est.correo+'</td>'+
    '<td>' + est.telefono+'</td>'+
    '<td>' + est.tipo+'</td>'
    });
    texto=texto+'</tbody>'+'</table>';
        return texto;
      
}) 

