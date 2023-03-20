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

    function LogicaCat(navigate) {
        navigate("/categorias");

    }
    const deleteCategory = _id => {
        const isDelete = window.confirm(`Desea eliminar esta categoria?${_id}`)
        if (isDelete) {
            axios.delete(`http://localhost:5000/category/${_id}`, {
                _id: _id
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                console.log(res);
                if (res) {
                    navigate("/home");
                }
            }).catch(error => {
                console.log("error: " + error);
                alert("NO se pudo eliminar");
            });                 
        }
    }
    const navigate = useNavigate();
    return (
        <div className="tabla">
            {<Header />}
            <Container className="tablita">
                <br />
                <Button onClick={() => LogicaCat(navigate)} color="success">Insertar nueva categoria</Button>
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
                                    <Button onClick={() => deleteCategory(cat._id)} color="danger">eliminar</Button>
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