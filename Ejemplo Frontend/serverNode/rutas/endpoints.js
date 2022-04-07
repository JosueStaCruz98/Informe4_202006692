const { TIMEOUT } = require('dns');
const express = require('express');
const router = express.Router(); // crea objeto para definir rutas
const fs = require('fs')

const mysqlconnection = require('../database.js');


router.get('/',(req,res)=>{
    res.send("PRACTICAS INICIALES - INTERMEDIAS");
});


// CREATE CURSO

router.post('/insertar',(req,res)=>{
    const {nombre, codigo, creditos } = req.body
    const curso = req.body;

    const sql = "INSERT INTO curso (codigo, nombre, creditos) VALUES ("+codigo+",\""+nombre+"\","+creditos+");"
    mysqlconnection.query(sql,[codigo,nombre,creditos],function(err, result){
        if(err) throw err;
        console.log("inserción hecha");
    })
    console.log(nombre) // mostrar esto para que vean que si entran los datos
    res.send(curso)
})
//Crea usuario
router.post('/insertar2',(req,res)=>{
    const {carnet, nombres, apellidos, password, correo} = req.body
    const curso = req.body;

    const sql = "INSERT INTO usuario (carnet, nombres, apellidos, password, correo) VALUES ("+carnet+",\""+nombres+"\",\""+apellidos+"\",\""+password+"\",\""+correo+"\""+");"
    mysqlconnection.query(sql,[carnet,nombres, apellidos, password, correo],function(err, result){
        if(err) throw err;
        console.log("Inserción hecha");
    })
    console.log(nombre) // mostrar esto para que vean que si entran los datos
    res.send(curso)
})
//Crea publicaciones
router.post('/insertar3',(req,res)=>{
    const {carnet2, comentario, profesor, curso, fecha} = req.body
    const curso2 = req.body;

    const sql = "INSERT INTO publicacion (catedratico_idCatedratico, comentario, curso_codigo, fecha, Usuario_carnet) VALUES ("+profesor+",\""+comentario+"\","+curso+","+fecha+","+carnet2+""+");"
    mysqlconnection.query(sql,[carnet2,comentario, profesor, curso, fecha],function(err, result){
        if(err) throw err;
        console.log("Inserción hecha");
    })
    console.log(nombre) // mostrar esto para que vean que si entran los datos
    res.send(curso2)
})
//Actualiza contraseña
router.post('/update',(req,res)=>{
    const {carnet3, password} = req.body
    const curso2 = req.body;

    const sql = "UPDATE usuario SET password="+password+", WHERE usuario.carnet ="+carnet3+";"
    mysqlconnection.query(sql,[carnet3, password],function(err, result){
        if(err) throw err;
        console.log("Actualización hecha");
    })
    console.log(nombre) // mostrar esto para que vean que si entran los datos
    res.send(curso2)
})
//Mostrar todas las publicaciones
router.get('/leer2',(req,res)=>{
    //  const {nombre } = req.body
      sql = "SELECT * FROM publicacion;";
      let result = mysqlconnection.query(sql, (err, rows)=>{
          if(err) throw err;      
          res.json(rows);
          
      })
  });

//Mostrar los datos del perfil
router.get('/leer3',(req,res)=>{
    const {carnet2} = req.body
      sql = "SELECT nombres, apellidos, correo, carnet FROM usuario where carnet like "+carnet2+";"
      let result = mysqlconnection.query(sql, (err, rows)=>{
          if(err) throw err;      
          res.json(rows);
          
      })
  });
  


router.put('/actualizar',(req,res)=>{
    const {nombre, nuevo } = req.body
    sql = "UPDATE curso SET creditos="+nuevo+" WHERE nombre = \""+nombre+"\";";
    mysqlconnection.query(sql,[nombre, nuevo], function (err,result){
        if(err) throw err;
        console.log("actualizado")
        res.send("hecho")
    });
});

//? DELETE

router.post('/eliminar',(req,res)=>{
    const {nombre } = req.body
    sql = "DELETE FROM curso WHERE nombre = \""+nombre+"\";";
    mysqlconnection.query(sql,[nombre], function (err,result){
        if(err) throw err;
        console.log("borrado")
        res.send("hecho")
    });
});





// --------------- ENDPOINT PARA UN FILTRO BÁSICO ------------
router.post("/filtro", (req, res)=>{
    const {nombre: carnet} = req.body
    // para todo lo que contenga - ejemplo, si se postea Z, devolverá los catedráticos : "ZULMA", "MARTINESZ", "ALVAREZ"
    sql = "Select carnet, nombres, apellidos, correo from usuario where usuario.carnet Like "+carnet+" "
    // para cuando se desee encontrar solo los que COMIENCEN con el dato like + nombre + %
    // si se quiere que TERMINEN -> like %nombre
    let result = mysqlconnection.query(sql, (err, rows)=>{
        if(err) throw err;
     
        res.json(rows);
        
    })
});

//Filtro Catedratico
router.post("/filtro1", (req, res)=>{
    const {nombre: catedratico} = req.body
    // para todo lo que contenga - ejemplo, si se postea Z, devolverá los catedráticos : "ZULMA", "MARTINESZ", "ALVAREZ"
    sql = "Select * from publicacion where publicacion.catedratico_idCatedratico Like "+catedratico+" "
    // para cuando se desee encontrar solo los que COMIENCEN con el dato like + nombre + %
    // si se quiere que TERMINEN -> like %nombre
    let result = mysqlconnection.query(sql, (err, rows)=>{
        if(err) throw err;
     
        res.json(rows);
        
    })
});
//Filtro Curso
router.post("/filtro2", (req, res)=>{
    const {curso} = req.body
    // para todo lo que contenga - ejemplo, si se postea Z, devolverá los catedráticos : "ZULMA", "MARTINESZ", "ALVAREZ"
    sql = "Select * from publicacion where publicacion.curso_codigo like "+curso+";"
    // para cuando se desee encontrar solo los que COMIENCEN con el dato like + nombre + %
    // si se quiere que TERMINEN -> like %nombre
    let result = mysqlconnection.query(sql, (err, rows)=>{
        if(err) throw err;
     
        res.json(rows);
        
    })
});
// ! IMPORTANTE

// ------------------- LOGIN SIMPLE --------------------

router.post('/login', (req,res)=>{
    const {carnet, password} = req.body // Como nota: a la tabla de Usuario le di el campo "usuario" como UQ,
    //lo que significa unique, y evita que la persona posea el mismo nombre de usuario
    console.log(req.body)
    
    sql = "SELECT nombres, apellidos, correo, carnet from Usuario where carnet = \""+carnet+"\" AND password = \""+password+"\";"
    /**si quisieran usar encriptacion, su insert a la base de datos debe obtener el dato que se envía
     * codigicar este dato ya sea en sha256, md5 etc y guardar esa contraseña en la base de datos
     * aquí se haría lo mismo, solo que en lugar de insert, es select
     */
  
    let result = mysqlconnection.query(sql,[carnet,password],(err,row)=>{
        if (err) throw err;
        res.json(row[0]) // solo necesito mi usuario en front end para confirmar y almacenar
        
    })
    console.log(result)
})

router.post('/login2', (req,res)=>{
    const {carnet, correo} = req.body // Como nota: a la tabla de Usuario le di el campo "usuario" como UQ,
    //lo que significa unique, y evita que la persona posea el mismo nombre de usuario
    console.log(req.body)
    
    sql = "SELECT * from Usuario where carnet = \""+carnet+"\" AND correo = \""+correo+"\";"
    /**si quisieran usar encriptacion, su insert a la base de datos debe obtener el dato que se envía
     * codigicar este dato ya sea en sha256, md5 etc y guardar esa contraseña en la base de datos
     * aquí se haría lo mismo, solo que en lugar de insert, es select
     */
  
    let result = mysqlconnection.query(sql,[carnet,correo],(err,row)=>{
        if (err) throw err;
        res.json(row[0]) // solo necesito mi usuario en front end para confirmar y almacenar
        
    })
    console.log(result)
})

// ! IMPORTANTE
// el module exports ayuda a que la información de 'endpoints' sea accessible a cualquier otra 
//función a la hora de ser importado

module.exports = router;