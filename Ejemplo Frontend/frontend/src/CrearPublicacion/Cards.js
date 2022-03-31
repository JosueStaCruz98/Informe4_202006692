import React,{useState} from "react";
import {Card,Button, Form} from 'react-bootstrap';
import Axios from 'axios'


export function Cards(){

    const carnet2 = localStorage.getItem('carnet')
    const[comentario, setComentario] = useState(null)
    const[profesor, setProfesor] = useState(null)
    const[curso, setCurso] = useState(null)
    const fecha = "CURRENT_TIMESTAMP"
    console.log(fecha.replace(/['"]+/g, ''));

    const handleSubmit = (e) =>{
 
        const data = {
            carnet2,
            comentario,
            profesor,
            curso,
            fecha
        }
       
        console.log(data)
        Axios.post('/insertar3', data)
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
        <Card.Header>Agregar Nuevo</Card.Header>
        <Card.Body>
          <Card.Title>Agregar Nuevo curso</Card.Title>
          {/*llamada a método */}
          <Form onSubmit={ handleSubmit}>
            <Form.Label>Comentario:</Form.Label>
            <Form.Control type="text" placeholder="Comentario" onChange={e=> setComentario(e.target.value)} value={comentario} ></Form.Control>
            <br/>
            <Form.Label>Código Catedrático:</Form.Label>
            <Form.Control type="text" placeholder="Código Catedrático" onChange={e=> setProfesor(e.target.value)} value={profesor} ></Form.Control>
            <br/>
            <Form.Label>Curso:</Form.Label>
            <Form.Control type ="number" placeholder="Curso" onChange={e=> setCurso(e.target.value)} value={curso}></Form.Control>
            <br/>
            <Button variant="primary" type="submit">Crear Publicación</Button>{' '}
            <Button variant="secondary" href="/Datos">Regresar</Button>
          </Form>
          
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      </center>
      </div>
    );
}

