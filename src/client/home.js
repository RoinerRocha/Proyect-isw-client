import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./header";
import filter from "./filter";
import { todasCategorias } from "./funcion";
import { useNavigate } from "react-router"
import "./css/home.css";

function Home() {
    const [categorias, setCategorias] = useState(null)
    useEffect(() => {
        todasCategorias(setCategorias)
    }, [])
    /*const navigate=useNavigate();
    let personaDb = JSON.parse(sessionStorage.getItem('Token'));//valida si la persona esta logueada si no lo devuelve al registro
    console.log(personaDb)
    let nomp="null";
    if(!personaDb){
        navigate("/")
        alert("No estas logueado");
    }else{
      nomp=personaDb.lname;
    }*/
    return (
        <div>
        {<Header />}
        <div className='container-filter container'>
            <div className='icon-filter'>
                {categorias !== null ? (categorias.map(cat=>(
                    <button className="btn-cat">{cat.name}</button>
                ))) : ('no hay cosas')}
                <span>Filtrar Categorias</span>
            </div>
        </div>
        <div className="home">
            <div className="card">
                <h1>Teams</h1>
                    <div>
                        <h2>nombre de la noticia</h2>
                        <img src="https://pokeclubsite.files.wordpress.com/2016/07/pikachu-150x1501.png" alt="150" width="150" />
                        <p>Fifa Code: codigo3</p>
                        <p>Grupo:  grupo2</p>
                    </div>
            </div>
        </div>
    </div>
    )
}
export default Home;