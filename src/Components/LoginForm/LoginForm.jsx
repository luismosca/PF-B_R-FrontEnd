
import style from './LoginForm.module.css'
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios"; 
// import { useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom";
//*----------------------------------------------------
// import { validations } from "./validations"

const LoginForm = () => {


    return (
        <div className={style.loginContainer}>
            <form>

                <div>
                    <h2>Inicia sesión para ver tu perfil</h2>
                </div>

                <div className={style.inlineFields}>
                    <div>
                        <h3>¿No tienes una cuenta?</h3>
                    </div>

                    <div>
                        <Link to="/registro" >
                            Reístrate
                        </Link>
                    </div> 
                </div>
                

                <div className={style.formfield}>
                    <label>Correo elelctronico</label>
                    
                    <input
                        className={style.input}
                        // onChange={onInputChange}
                        name="email"
                        type="email"
                        // value={videogame.name}
                        required
                    />            
                    
                </div>

                <div className={style.formfield}>
                    <label>Contraseña</label>
                    
                    <input
                        className={style.input}
                        // onChange={onInputChange}
                        name="password"
                        type="password"
                        // value={videogame.name}
                        required
                    />            
                    
                </div>

                <br />
                <div className={style.contenedorBoton}>
                    <button type="submit" className={style.submitbutton}>Inicia sesíon</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;