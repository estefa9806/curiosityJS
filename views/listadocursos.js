const hbs =require('hbs');

hbs.registerHelper('listar',()=>
{
    listaEstudiante=require('../bdCursos.json');
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
    '<td>'+ cursos.idcurso+'</td>'+
    '<td>'+ cursos.nombrecurso+'</td>'+
    '<td>'+cursos.valor+'</td>'+
    '<td>'+cursos.estado+'</td>'+
    '<td>'+cursos.modalidad+'</td>'+
    '<td>'+cursos.descripcioncurso+'</td>'+
    '<td>'+cursos.intensidadhoraria+'</td>'+'</tr>'
    });
    texto=texto+'</tbody>'+'</table>';
        return texto;
      
}) 
