import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'


export function Cards() {
    const [carnet, setUsusario] = useState(null)
    const [password, setPassword] = useState(null)
    const redirect = useNavigate()

    const [open, setOpen] = React.useState(false);
  
    var ingreso;

    const handleSubmit = (e) => {
        e.preventDefault() // permanecen los datos
        const data ={
            carnet,
            password
        }
     //   console.log(data)
        Axios.post('/login',data)
            .then(res =>{
              
                ingreso = Object.keys(res.data).length===0;
               if(!ingreso){
                   localStorage.setItem("carnet",res.data.carnet)
                   redirect('/datos')
               }
               else{
                   redirect('/Crear')           
               }
            })
    }

    return (
        <div>
            <br />
            <Card style={{width:"45rem"}}>
                <Card.Header as="h3" >Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Registro Académico:</Form.Label>
                            <Form.Control type="text" placeholder="CARNET ESTUDIANTIL" onChange={e=> setUsusario(e.target.value)} value={carnet} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" onChange={e=> setPassword(e.target.value)} value = {password} />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Login
                        </Button>{' '}
                        
                        <Button variant="secondary" type="submit" href='/Crear'>
                            Crear Usuario
                        </Button>{' '}

                        <Button variant="info" type="submit" href =''>
                            Olvido su contraseña?
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}