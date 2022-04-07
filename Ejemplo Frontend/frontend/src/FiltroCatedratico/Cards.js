import React, { useState, useEffect } from 'react'
import { Card, Button, Table, Form } from 'react-bootstrap'
import Axios from 'axios'


export function Cards() {

  const [catedratico, setCatedratico] = useState(null)
  const [datos, setDatos] = useState([])



  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      nombre: catedratico
    }
    console.log(data)
    Axios.post('/filtro1', data)
      .then(res => {
        setDatos(res.data)
        
      })
      console.log(datos)
  }

  return (
    <div>
      <center>
        <br />
        <Card style={{ width: '65rem' }}>

          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h1>Buscar Publicación</h1>
              <Form.Control type="text" placeholder="Código Catedrático" onChange={e => setCatedratico(e.target.value)} value={catedratico} />
              <br></br>
              <Button variant="primary" type="submit">
                Buscar
              </Button>
            </Form>

            <br>
            </br>
            <Table striped bordered hover>
              <thead>
                <tr>
                    <th>Carnet Estudiante</th>
                    <th>Comentario</th>
                    <th>Catedrático</th>
                    <th>Curso</th>
                    <th>Fecha de Publicación</th>
                </tr>
              </thead>
              <tbody>
                {
                  datos.map((cat) => {
                   
                    return (
                      
                      <tr>
                        <td>{cat.Usuario_carnet}</td>
                        <td>{cat.comentario}</td>
                        <td>{cat.catedratico_idCatedratico}</td>
                        <td>{cat.curso_codigo}</td>
                        <td>{cat.fecha}</td>
                      </tr>

                    )
                  })
                }

              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </center>


    </div>
  )
}