import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router";
import Header from "./header";
import axios from "axios";

function NewSources(){
    let navigate=useNavigate();
    const Registrar = async (name, url, ) => {   
        if(!name || !url ){
            alert("Falta algun dato por ingresar");
        }else{
            axios.post('http://localhost:5000/user',{
            name: name,
            url: url
            },{
                headers: {
                'Content-Type': 'application/json'
                }  
         }).then(function (res) {
                 console.log(res);
                 if(res){
                    console.log("nada");
                 }
               }).catch(error=>{
                console.log("error: "+error);
                alert("El correo digitado ya existe");
              });
              
        };

    };
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
                    <option>valor1</option>
                    <option>valor2</option>
                </select>
                <div className="login-btn1" type="submit" value="Registrar Noticia" onClick={() => Registrar(name, url)}>registrar Noticia</div>
                     {/*<input type="submit" value="Registrar" onClick={() => Registrar(usuario, correo, contra, contra2)} />*/}
            </div>
        </div>
    );
}
export default NewSources;