import axios from "axios";
import style from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/B&R.png";
import { NavBar } from "../NavBar/NavBar";
import { useDispatch } from "react-redux";
import { postLoginUser } from "../../Redux/actions";

// ! condicionar formulario

//*----------------------------------------------------

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

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
    try {
      dispatch(postLoginUser(dataLogin));
      navigate("/home");
    } catch (error) {
      console.log(err.message);
      console.log("Hubo un problema al iniciar seccion");
    }
  }

  //----------------------------------------------------------------

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <a href="/home">
          <img src={logo} alt="Logo" className={style.logo} />
        </a>
      </div>

      <div className={style.loginContainer}>
        <div>
          <a href="/home">
            <img src={logo} alt="Logo" className={style.logo} />
          </a>
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <h1 className={style.h1Login}>Inicia sesión para ver tu perfil</h1>
          </div>

          <div className={style.inlineFields}>
            <div>
              <h3 className={style.h3Login}>¿No tienes una cuenta?</h3>
            </div>

            <div>
              <Link className={style.linkLogin} to="/registro">
                Regístrate
              </Link>
            </div>
          </div>

          <div className={style.formfield}>
            <label className={style.labelLogin}>Correo electronico</label>

            <input
              className={style.input}
              onChange={onInputChange}
              name="email"
              type="email"
              value={dataLogin.email}
              placeholder="ejemplo@gmail.com"
              required
            />
          </div>

          <div className={style.formfield}>
            <label className={style.labelLogin}>Contraseña</label>

            <input
              className={style.input}
              onChange={onInputChange}
              name="password"
              type="password"
              value={dataLogin.password}
              placeholder="Escriba us contraseña"
              required
            />
          </div>

          <br />
          <div className={style.contenedorBoton}>
            <button type="submit" className={style.submitbutton}>
              Inicia sesíon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
