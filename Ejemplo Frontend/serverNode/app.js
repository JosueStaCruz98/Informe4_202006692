const express = require('express')
const morgan = require('morgan') 
const cors = require('cors')
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.set('port',3001);

app.use(express.json());
app.use(require('./rutas/endpoints')); 

app.listen(app.get('port'),()=>{
    console.log("Server running")
})