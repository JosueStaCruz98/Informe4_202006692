import React, {useState, useEffect} from 'react'
import { Table, ListGroup, Button, Alert, Nav, Navbar, Container, Card, NavDropdown} from 'react-bootstrap'

import Axios from 'axios'

export function Cards() {
    const[info, setInfo] = useState([])
    const carnetPerfil = localStorage.getItem('carnet')
    
    useEffect(()=>{ 
        Axios.get("/leer2")
            .then(res => {
                setInfo(res.data)
            })

    },[])
    

    return (
        <div>
            <br />
            <>
            
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/Datos">Menú</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/CrearPublicacion">Crear Publicación</Nav.Link>
                            <Nav.Link href="/Filtro">Ver Usuarios</Nav.Link>
                            <NavDropdown title="Filtrar Publicaciones" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/FiltroCurso">Por Curso</NavDropdown.Item>
                                <NavDropdown.Item href="/FiltroCatedratico">Por Catedrático</NavDropdown.Item>         
                            </NavDropdown>
                            <NavDropdown title={carnetPerfil} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/PerfilIngresado">Mi Perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">CerrarSesión</NavDropdown.Item>
                            </NavDropdown>                          
                        </Nav>
                </Container>
            </Navbar>

            
            </>
            <center>
                <br></br>
            <Card style={{ width: '43rem' }} border="success">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Carnet Estudiante</th>
                        <th>Comentario</th>
                        <th>Catedrático</th>
                        <th>Curso</th>
                        <th>Fecha de Publicación</th>
                        <th>Ver Comentarios</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /*mapeamos lo que está guardado en map*/
                        info.map((datos)=>{
                            return(
                                <tr>
                                    {/*en get nos retorna un objeto json y este posee etiquetas
                                    asi que se coloca datos.etiqueta*/}
                                    <td>{datos.Usuario_carnet}</td>
                                    <td>{datos.comentario}</td>
                                    <td>{datos.catedratico_idCatedratico}</td>
                                    <td>{datos.curso_codigo}</td>
                                    <td>{datos.fecha}</td>
                                    <td><Button>Ver Comentarios</Button></td>                                   
                                </tr>
                            )
                        })
                    }

                </tbody>

            </Table>
            </Card>
            </center>

        </div>
    )
}