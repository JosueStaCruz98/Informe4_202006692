const express = require('express') // provee lógica de servidor a la app
const morgan = require('morgan') // middleware logger mas usado para requests
const cors = require('cors') // permite hacer requests entre browsers
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.set('port',3002);

app.use(express.json());
app.use(require('./rutas/endpoints')); 

app.listen(app.get('port'),()=>{
    console.log("Server running on port 3001")
})
