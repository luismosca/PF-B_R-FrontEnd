
import style from './RegisterForm.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios"; 
// import { useState, useEffect} from "react";
//*----------------------------------------------------
// import { validations } from "./validations"
const imagen = "/Formbg.jpg"

const RegisterForm = () => {    

    const [dataRegistro, setDataRegistro] = useState({
        email: "",
        password:"",  
        confirmPassword: ""
    })

    function onInputChange(e) {
        e.preventDefault();

        setDataRegistro({
            ...dataRegistro,
            [e.target.name]: e.target.value,
        });       
        
        // console.log(dataRegistro);
    }


    return (
        <div className={style.registerContainer}>
            <form>

                <div>
                    <h1>Regístrate a la plataforma B&R</h1>
                </div>

                <div className={style.inlineFields}>
                    <div>
                        <h4>¿Ya tienes una cuenta?</h4>
                    </div>

                    <div>
                        <Link to="/Login" >
                            Inicia sesión
                        </Link>
                    </div> 

                </div>
                

                

                <div className={style.formfield}>
                    <label>Correo elelctronico</label>
                    
                    <input
                        className={style.input}
                        onChange={onInputChange}
                        name="email"
                        type="email"
                        value={dataRegistro.email}
                        required
                    />            
                    
                </div>

                <div className={style.formfield}>
                    <label>Contraseña</label>
                    
                    <input
                        className={style.input}
                        onChange={onInputChange}
                        name="password"
                        type="password"
                        value={dataRegistro.password}
                        required
                    />            
                    
                </div>

                <div className={style.formfield}>
                    <label>Confirmar Contraseña</label>
                    
                    <input
                        className={style.input}
                        onChange={onInputChange}
                        name="confirmPassword"
                        type="password"
                        value={dataRegistro.confirmPassword}
                        required
                    />            
                    
                </div>

                <br />
                <div className={style.contenedorBoton}>
                    <button type="submit" className={style.submitbutton}>Registrate</button>
                </div>


                {/* <div>
                    <img src={imagen} alt="img" />
                </div> */}

                
            </form>
        </div>
    )
}

export default RegisterForm;