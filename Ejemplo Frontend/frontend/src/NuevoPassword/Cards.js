import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'


export function Cards() {

    const carnet3 = localStorage.getItem('carnet')
    const [password, setPassword] = useState(null)
    const redirect = useNavigate()

    const [open, setOpen] = React.useState(false);
  
    var ingreso;

    const handleSubmit = (e) => {
        e.preventDefault() // permanecen los datos
        const data ={
            carnet3,
            password
        }
     //   console.log(data)
     console.log(data)
     Axios.post('/update', data)
       .then(res=>{
         console.log(res.data)
       }
         )
    }

    return (
        <div>
            <br />
            <Card style={{width:"45rem"}}>
                <Card.Header as="h3" >Recuperación de Contraseña</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nueva Contraseña:</Form.Label>
                            <Form.Control type="password" placeholder="Nueva Contraseña" onChange={e=> setPassword(e.target.value)} value={password} />
                        </Form.Group>

                        
                        <Button variant="primary" type="submit">
                            Comprobar Información
                        </Button>{' '}
                        <Button variant="secondary" type="submit" href="/">
                            Regresar Menú Principal
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}