import React, {useState, useEffect} from 'react'
import { Table, ListGroup, Button, Alert, Nav, Navbar, Container, Card, NavDropdown, ListGroupItem} from 'react-bootstrap'

import Axios from 'axios'


export function Cards() {

    const[data, setData] = useState([])
    const carnet2 = localStorage.getItem('carnet')
    const nombres2 = localStorage.getItem('nombres')
    const apellidos2 = localStorage.getItem('apellidos')
    const correo2 = localStorage.getItem('correo')

    

    return(
        <>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" />
                    <Card.Body>
                    <Card.Title>{nombres2 + " " + apellidos2}</Card.Title>
                    <Card.Text>
                        Estudiante de la Facultada de Ingeniería
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Correo: </b>{correo2}</ListGroupItem>
                        <ListGroupItem><b>Carnet: </b>{carnet2}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Card.Link href="/Datos">Regresar</Card.Link>
                    </Card.Body>
                </Card>
                </>
                
            )
}