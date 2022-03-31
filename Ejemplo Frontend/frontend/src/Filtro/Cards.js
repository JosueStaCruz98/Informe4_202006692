import React, { useState, useEffect } from 'react'
import { Card, Button, Table, Form } from 'react-bootstrap'
import Axios from 'axios'


export function Cards() {

  const [nombre, setNombre] = useState(null)
  const [datos, setDatos] = useState([])



  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      nombre
    }
    console.log(data)
    Axios.post('/filtro', data)
      .then(res => {
        setDatos(res.data)
        
      })
      console.log(datos)
  }

  return (
    <div>
      <center>
        <br />
        <Card style={{ width: '50rem' }}>

          <Card.Body>
            <Form onSubmit={handleSubmit}>

              <Form.Control type="text" placeholder="Nombre de Catedratico" onChange={e => setNombre(e.target.value)} value={nombre} />

              <Button variant="primary" type="submit">
                Buscar
              </Button>
            </Form>

            <br>
            </br>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Tipo</th>

                </tr>
              </thead>
              <tbody>
                {
                  datos.map((cat) => {
                   
                    return (
                      
                      <tr>
                        <td>{cat.idCatedratico}</td>
                        <td>{cat.Nombre}</td>
                        <td>{cat.tipo}</td>
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