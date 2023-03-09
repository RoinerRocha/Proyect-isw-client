import React from "react";
import "./css/Login.css";

function Login(){
    return(
        <div className="background">
            <div className="cover">
                <h1>Inicio</h1>
                    <input className="email" type="text" placeholder="Email" required/>
                    <input className="contra" type="password" placeholder="Contraseña" required/>
                    <div className="login-btn"  type="submit" value="Login">login</div>
                    {/*<input type="submit" value="Login" onClick={()=>Logicalogin(correo,contra,navigate)}/>*/}
                    <div className="alt-login">                        
                        <div className="">Si no estas registrado <a href="/register">Registrar</a></div>
                    </div>
                </div>          
        </div>
    );
}
export default Login;