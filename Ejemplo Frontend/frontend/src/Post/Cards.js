import React,{useState} from "react"; // Use state sirve para almacenar informacion del form
import {Card,Button, Form} from 'react-bootstrap'; // ver https://react-bootstrap.github.io/forms/overview/
import Axios from 'axios' // Conecta backend con frontend




export function Cards(){
// setNombre -> asigna a la variable nombre . nombre -> guarda
// setNombre -> set del dato y nombre -> get del dato
    const[nombre, setNombre] = useState(null)
    const[codigo, setCodigo] = useState(null)
    const[creditos, setCreditos] = useState(null)
    
    //Creamos un método para postear y lo llamamos en Form
    const handleSubmit = (e) =>{
 
        const data = {
            nombre,
            codigo,
            creditos
        } //crea un objeto
       
        console.log(data)
        //que le insertamos? data!
        Axios.post('/insertar', data)
          .then(res=>{
            console.log(res.data)
          }
            )
    }
  
    return(
        
        <div >
            <center>
            <br></br>
        <Card style={{width: '43rem'}} className="text-center">
        <Card.Header>Ingreso de Cursos</Card.Header>
        <Card.Body>
          <Card.Title>Ingrese un nuevo curso:</Card.Title>
          {/*llamada a método */}
          <Form onSubmit={ handleSubmit}>
            <Form.Label>Nombre:</Form.Label>
                                                                        {/* hace seteo y muestra*/}
            <Form.Control type="text" placeholder="Nombre del Curso" onChange={e=> setNombre(e.target.value)} value={nombre}></Form.Control>
            <br/>

            <Form.Label>Codigo:</Form.Label>
            <Form.Control type="number" placeholder="Codigo del curso" onChange={e=> setCodigo(e.target.value)} value={codigo} ></Form.Control>
            <br/>
            <Form.Label>Credito:</Form.Label>
            <Form.Control type ="number" placeholder="Creditos que Otorga" onChange={e=> setCreditos(e.target.value)} value={creditos}></Form.Control>
            <br></br>
            <Button variant="primary" type="submit">Crear</Button>
          </Form>
          
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      </center>
      </div>
    );
}
