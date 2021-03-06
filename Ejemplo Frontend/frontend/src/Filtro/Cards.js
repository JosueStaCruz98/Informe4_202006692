import React, { useState, useEffect } from 'react'
import { Card, Button, Table, Form } from 'react-bootstrap'
import Axios from 'axios'


export function Cards() {

  const [carnet, setCarnet] = useState(null)
  const [datos, setDatos] = useState([])



  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      nombre: carnet
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
              <h1>Buscar Usuario</h1>
              <Form.Control type="text" placeholder="Carnet Estudiante" onChange={e => setCarnet(e.target.value)} value={carnet} />
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
                  <th>Carnet</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Correo</th>
                </tr>
              </thead>
              <tbody>
                {
                  datos.map((cat) => {
                   
                    return (
                      
                      <tr>
                        <td>{cat.carnet}</td>
                        <td>{cat.nombres}</td>
                        <td>{cat.apellidos}</td>
                        <td>{cat.correo}</td>
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