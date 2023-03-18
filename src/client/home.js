import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./header";
import filter from "./filter";
import { useNavigate } from "react-router"
import "./css/home.css";

function Home() {
    fetch("http://localhost:5000/userData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: window.localStorage.getItem("Token"),
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userData");
        });
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
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='icon'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                    />
                </svg>
                <span>Filtrar</span>
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
            <div className="card">
                <h1>Teams</h1>
                    <div>
                        <h2>nombre de la noticia</h2>
                        <img src="https://pokeclubsite.files.wordpress.com/2016/07/pikachu-150x1501.png" alt="150" width="150" />
                        <p>Fifa Code: codigo3</p>
                        <p>Grupo:  grupo2</p>
                    </div>
            </div>
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