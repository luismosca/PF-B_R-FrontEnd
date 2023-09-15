import axios from "axios";
import style from './LoginForm.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// ! condicionar formulario

//*----------------------------------------------------


const LoginForm = () => {

    const navigate = useNavigate();

    const [dataLogin, setDataLogin] = useState({
        email:"",
        password:""
    })

    function onInputChange(e) {
        e.preventDefault();

        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value,
        });       
        
        // console.log(dataLogin);
    }

    //-------------------------------------------------
async function onSubmit(e) {
    e.preventDefault();
    
    axios
        .post("http://localhost:3001/session/login", dataLogin)
        .then(() => {
            
            navigate("/home");
        })
        .catch((err) => {
            console.log(err.message);
            console.log("Hubo un problema al iniciar seccion");
        });
}

//----------------------------------------------------------------

    return (
        <div className={style.loginContainer}>
            <form onSubmit={onSubmit}>

                <div>
                    <h2>Inicia sesión para ver tu perfil</h2>
                </div>

                <div className={style.inlineFields}>
                    <div>
                        <h3>¿No tienes una cuenta?</h3>
                    </div>

                    <div>
                        <Link to="/registro" >
                            Regístrate
                        </Link>
                    </div> 
                </div>
                

                <div className={style.formfield}>
                    <label>Correo electronico</label>
                    
                    <input
                        className={style.input}
                        onChange={onInputChange}
                        name="email"
                        type="email"
                        value={dataLogin.email}
                        placeholder= "ejemplo@gmail.com"
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
                        value={dataLogin.password}
                        placeholder= "Escriba us contraseña"
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