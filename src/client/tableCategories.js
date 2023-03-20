import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router"
import "./css/table.css";
import { todasCategorias } from "./funcion";
import Header from "./header";
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";

function TableCategories() {
    const [categorias, setCategorias] = useState(null)
    useEffect(() => {
        todasCategorias(setCategorias)
    }, [])

    function LogicaCat(navigate){ 
            navigate("/categorias");
        
    }
    const navigate=useNavigate();
    return (
        <div className="tabla">
            {<Header />}
            <Container className="tablita">
                <br />
                <Button onClick={()=>LogicaCat(navigate)}color="success">Insertar nueva noticia</Button>
                <br /><br />
                <Table>
                    <thead>
                        <th>Category</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        {categorias !== null ? (categorias.map(cat => (
                           <tr>
                           <td>{cat.name}</td>
                           <td>
                               <Button color="primary">editar</Button>{"  "}
                               <Button color="danger">eliminar</Button>
                           </td>
                       </tr>
                        ))) : ('no hay cosas')}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
export default TableCategories;