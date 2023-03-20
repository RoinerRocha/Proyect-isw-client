import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router"
import "./css/table.css";
import Header from "./header";
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";



function TableNews() {
    function LogicaNew(navigate){ 
        navigate("/newSources");
    
    }
    const navigate=useNavigate();
    return (
        <div className="tabla">
            {<Header />}
            <Container className="tablita">
                <br />
                <Button onClick={()=>LogicaNew(navigate)} color="success">Insertar nueva noticia</Button>
                <br /><br />
                <Table>
                    <thead>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Peliculas</td>
                            <td>novedades</td>
                            <td>
                                <Button color="primary">editar</Button>{"  "}
                                <Button color="danger">eliminar</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
export default TableNews;