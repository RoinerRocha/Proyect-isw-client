import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { todasCategorias } from "./funcion";
import Header from "./header";
import axios from "axios";
import "./css/newsSources.css";

function NewSources() {
    const [categorias, setCategorias] = useState(null)
    useEffect(() => {
        todasCategorias(setCategorias)
    }, [])

    let navigate = useNavigate();
    const Registrar = async (name, url,) => {
        if (!name || !url) {
            alert("Falta algun dato por ingresar");
        } else {
            axios.post('http://localhost:5000/user', {
                name: name,
                url: url
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                console.log(res);
                if (res) {
                    console.log("nada");
                }
            }).catch(error => {
                console.log("error: " + error);
                alert("El correo digitado ya existe");
            });

        };

    };
    let [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/category', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
            setCategory(res.data.data);

        }).catch(error => {
            console.log("error: " + error);
        });
    }, []);
    let [name, setName] = useState('');
    let [url, setUrl] = useState('');
    return (
        <div className="backgroundNews">
            {<Header />}
            <div className="cover2">
                <h1>Registro de noticias</h1>
                <input className="nombre" type="text" placeholder="Nombre de la noticia" onChange={ev => setName(ev.target.value)} required />
                <input className="contraseña" type="text" placeholder="URL" onChange={ev => setUrl(ev.target.value)} required />  
                <select className="categoria">
                {categorias !== null ? (categorias.map(cat=>(
                    <option key={cat._id} onChange={ev => setUrl(ev.target.value)}>{cat.name}</option>
                ))) : ('no hay cosas')}
                    
                </select>
                <div className="login-btn1" type="submit" value="Registrar Noticia" onClick={() => Registrar(name, url)}>registrar Noticia</div>
                {/*<input type="submit" value="Registrar" onClick={() => Registrar(usuario, correo, contra, contra2)} />*/}
            </div>
        </div>
    );
}
export default NewSources;