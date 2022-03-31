import React, {useState, useEffect} from "react";
import {Table,Card} from 'react-bootstrap'

import Axios from 'axios'

export function Consulta(){
    const[info, setInfo] = useState([])
                
    useEffect(()=>{ 
        Axios.get("/leer")
            .then(res => {
                
                setInfo(res.data)
            })

    },[])


    return(
        <div>
            <center>
                <br></br>
            <Card style={{ width: '43rem' }} border="success">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Curso</th>
                        <th>Creditos</th>
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
                                    <th>{datos.codigo}</th>
                                    <th>{datos.nombre}</th>
                                    <th>{datos.creditos}</th>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </Table>
            </Card>
            </center>
        </div>
    );
}