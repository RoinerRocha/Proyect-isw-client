import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router"
import "./css/table.css";
import { todoSource } from "./funciones/News";
import Header from "./header";
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";



function TableNews() {
    let [usuario, setusuario] = useState(JSON.parse(localStorage.getItem('Token')));
    useEffect(() => {
        if (!usuario) {
            window.location("/")
        }
    }, []);

    const [sources, setSources] = useState(null)
    useEffect(() => {
        todoSource(setSources)
    }, [])

    const [editData, setEditData] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        category_id: ''
    })
    useEffect(() => {
        if (editData !== null) {
            setFormData(editData)
        } else {
            setFormData({
                name: '',
                category_id: ''
            })
        }
    }, [editData])

    const editSource = (sources) => {
        console.log(sources._id);
        const isEdited = window.confirm(`Desea Editar esta categoria?${sources._id}`)
        if (isEdited) {
            axios.put(`http://localhost:5000/newsource/${sources._id}`, {
                _id: sources._id,
                name: formData.name,
                category_id: formData.category_id
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
                alert("NO se pudo Editar");
            });
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar que se recarge la página

        if (formData.name !== '') {
            if (editData !== null) {
                editSource(formData)
            } else {
                formData._id = Date.now()
                setFormData({
                    name: '',
                    category_id: ''
                })
            }
        } else {
            alert("Por favor agrega un equipo y pais.")
        }
    }

    const deleteSource = _id => {
        const isDelete = window.confirm(`Desea eliminar este Source?${_id}`)
        if (isDelete) {
            axios.delete(`http://localhost:5000/newsource/${_id}`, {
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


    function LogicaNew(navigate) {
        navigate("/newSources");

    }
    const navigate = useNavigate();
    return (
        <div className="tabla">
            {<Header />}
            <Container className="tablita">
                <br />
                <Button onClick={() => LogicaNew(navigate)} color="success">Insertar nueva noticia</Button>
                <br /><br />
                <Table>
                    <thead>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        {sources !== null ? (sources.map(sou => (
                            <tr>
                                <td>{sou.name}</td>
                                <td>{sou.category_id}</td>
                                <td>
                                    <Button onClick={() => setEditData(sou)} color="primary">editar</Button>{"  "}
                                    <Button onClick={() => deleteSource(sou._id)} color="danger">eliminar</Button>
                                </td>
                            </tr>
                        ))) : ('no hay sources')}
                    </tbody>
                </Table>
                <form className='m-3' onSubmit={handleSubmit} >
                    <label htmlFor="name">Titulo del Source a editar:</label>
                    <input type="text" name="name" onChange={handleChange} value={formData.name}></input>
                    <label htmlFor="name">Nombre Categoria a editar:</label>
                    <input type="text" name="category_id" onChange={handleChange} value={formData.category_id}></input>
                    <input className='btn btn-success mx-1' type="submit" value="Enviar" />
                    <input className='btn btn-danger mx-1' type="reset" value="Cancelar" />
                </form>
            </Container>
        </div>
    )
}
export default TableNews;