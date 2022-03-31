import React,{useState} from "react";
import {Card,Button, Form} from 'react-bootstrap';
import Axios from 'axios'


export function Cards(){

    const[carnet, setCarnet] = useState(null)
    const[nombres, setNombres] = useState(null)
    const[apellidos, setApellidos] = useState(null)
    const[password, setContraseña] = useState(null)
    const[correo, setCorreo] = useState(null)
    
    const handleSubmit = (e) =>{
 
        const data = {
            carnet,
            nombres,
            apellidos,
            password,
            correo
        }
       
        console.log(data)
        //que le insertamos? data!
        Axios.post('/insertar2', data)
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
        <Card.Header>Crea una nueva cuenta</Card.Header>
        <Card.Body>
          <Card.Title>Ingresa tus datos:</Card.Title>
          {/*llamada a método */}
          <Form onSubmit={ handleSubmit}>
            <Form.Label>Carnet estudiantil:</Form.Label>
                                                                        {/* hace seteo y muestra*/}
            <Form.Control type="number" placeholder="Carnet Estudiantil" onChange={e=> setCarnet(e.target.value)} value={carnet}></Form.Control>
            

            <Form.Label>Nombres:</Form.Label>
            <Form.Control type="text" placeholder="Nombres" onChange={e=> setNombres(e.target.value)} value={nombres} ></Form.Control>
            <br/>
            <Form.Label>Apellidos:</Form.Label>
            <Form.Control type="text" placeholder="Apellidos" onChange={e=> setApellidos(e.target.value)} value={apellidos} ></Form.Control>
            <br/>
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type ="password" placeholder="Contraseña" onChange={e=> setContraseña(e.target.value)} value={password}></Form.Control>
            <br/>
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control type="text" placeholder="Correo electrónico" onChange={e=> setCorreo(e.target.value)} value={correo} ></Form.Control>
            <br/>
            <Button variant="primary" type="submit">Crear</Button>{' '}
            <Button variant="secondary" href="/">Regresar</Button>

          </Form>
          
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      </center>
      </div>
    );
}
