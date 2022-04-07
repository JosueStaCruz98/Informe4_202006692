import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'


export function Cards() {
    const [carnet, setUsusario] = useState(null)
    const [correo, setCorreo] = useState(null)
    const redirect = useNavigate()

    const [open, setOpen] = React.useState(false);
  
    var ingreso;

    const handleSubmit = (e) => {
        e.preventDefault() // permanecen los datos
        const data ={
            carnet,
            correo
        }
     //   console.log(data)
        Axios.post('/login2',data)
            .then(res =>{
              
                ingreso = Object.keys(res.data).length===0;
               if(!ingreso){
                   localStorage.setItem("carnet",res.data.carnet)
                   
                   redirect('/NuevoPassword')
               }
               else{
                   redirect('/')           
               }
            })
    }

    return (
        <div>
            <br />
            <Card style={{width:"45rem"}}>
                <Card.Header as="h3" >Recuperación de Contraseña</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Registro Académico:</Form.Label>
                            <Form.Control type="text" placeholder="CARNET ESTUDIANTIL" onChange={e=> setUsusario(e.target.value)} value={carnet} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="text" placeholder="Correo Electrónico" onChange={e=> setCorreo(e.target.value)} value = {correo} />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Comprobar Información
                        </Button>{' '}

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}