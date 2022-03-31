/*-- Comandos para NPM
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges; */

const { connect } = require('http2');
const mysql = require('mysql');

const conection = mysql.createConnection({// seteamos configuracion
    host: 'localhost',
    user: 'root',
    password:'mesaredonda12',
    database: 'mydb'

});

conection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Conectados a la base de datos')
    }
});


module.exports = conection; // MUY IMPORTANTE