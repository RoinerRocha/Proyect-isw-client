import React from "react";
import "./css/Register.css";
function Register(){
    return (
        <div className="background">
            <div className="cover1">
                <h1>Registro</h1>
                <input className="nombre" type="text" placeholder="Nombre" required />
                <input className="correo" type="text" placeholder="Segundo nombre" required />
                <input className="contraseña" type="password" placeholder="Email" required />
                <input className="contraseña2" type="password" placeholder="Contraseña"  required />
                <div className="login-btn1" type="submit" value="Registrar">registrar</div>
                <div className="alt-login1">
                    <div className="">Si ya estas registrado <a href="/">Login</a></div>
                </div>
                     {/*<input type="submit" value="Registrar" onClick={() => Registrar(usuario, correo, contra, contra2)} />*/}
            </div>
        </div>
    );
}
export default Register;