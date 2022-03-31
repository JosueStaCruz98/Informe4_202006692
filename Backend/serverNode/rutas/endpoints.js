const { TIMEOUT } = require('dns');
const express = require('express');
const router = express.Router(); // crea objeto para definir rutas
const fs = require('fs')

const mysqlconnection = require('../database.js');

router.get('/',(req,res)=>{
    res.send("PRACTICAS INICIALES - INTERMEDIAS");
});


//? CREATE

router.post('/insertar',(req,res)=>{
    const {nombre, codigo, creditos } = req.body
    const curso = req.body;

    const sql = "INSERT INTO curso (codigo, nombre, creditos) VALUES ("+codigo+",\""+nombre+"\"," +creditos+");"
    mysqlconnection.query(sql,[codigo,nombre,creditos],function(err, result){
        if(err) throw err;
        console.log("inserción hecha");
    })
    console.log(nombre) // mostrar esto para que vean que si entran los datos
    res.send(curso)
})

//? READ

router.get('/leer',(req,res)=>{
    const {nombre } = req.body
    sql = "SELECT * FROM curso WHERE nombre = \""+nombre+"\";";
    let result = mysqlconnection.query(sql,[nombre], (err, rows,fields)=>{
        if(err) throw err;
     
        res.json(rows);
        
    })
    res.send(result)
});

//? UPDATE

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

// ! IMPORTANTE

module.exports = router;