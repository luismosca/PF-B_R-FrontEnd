import axios from "axios";
import style from "./RegisterForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/B&R.png";
import { NavBar } from "../NavBar/NavBar";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import {
  postRegisterGoogleUser,
  postRegisterFacebookUser,
} from "../../Redux/actions";

//*----------------------------------------------------
// import { validations } from "./validations"
import Swal from "sweetalert2";
// const Swal = require('sweetalert2')

// ! condicionar formulario

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleHandler = () => {
    dispatch(postRegisterGoogleUser());
  };

  // const facebookHandler = () => {
  //   dispatch(postRegisterFacebookUser());
  // };

  //------------------Estado Data------------------------
  const [dataRegistro, setDataRegistro] = useState({
    name_surName: "",
    image: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function onInputChange(e) {
    e.preventDefault();

    setDataRegistro({
      ...dataRegistro,
      [e.target.name]: e.target.value,
    });

    // console.log(dataRegistro);
  }
  //-------------------------------------------------
  async function onSubmit(e) {
    e.preventDefault();
    if (dataRegistro.password !== dataRegistro.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden!",
      });
      // alert("Las contraseñas deben coincidir");
      return;
    } 
    axios
      .post("https://br-service.onrender.com/session/register", dataRegistro)
      .then(() => {
        Swal.fire("Buen Trabajo!", "Te registraste exitosamente!", "success");
        navigate("/login");
      })
      .catch((err) => {
        console.log("Hubo un problema al guardar el registro", err);
      });
  }

  //---------------claoudinary Foto----------------
  const [urlImage, setUrlImage] = useState("");

  const changeUploadImage = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "preset_login_pf");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/drhqzywsx/image/upload",
      data
    );

    // url de imagen de cloudinary
    // console.log(response.data.secure_url);
    setUrlImage(response.data.secure_url);
    setDataRegistro({
      ...dataRegistro,
      image: response.data.secure_url,
    });
  };

  //eliminar imagen:
  const FuncionDeleteImage = () => {
    // podemos poner una ruta que elimie la imagen de la db
    setUrlImage("");
    setDataRegistro({
      ...dataRegistro,
      image: "",
    });
  };

  // FormData() =
  // {
  //     file: {...},
  //     upload_preset: preset_pf
  // }

  //----------------------------------------------------------------

  return (
    <div>
      <div>
        <a href="/home">
          <img src={logo} alt="Logo" className={style.logo} />
        </a>
      </div>

      <div>
        <NavBar />
      </div>

      <div className={style.registerContainer}>
        <form onSubmit={onSubmit}>
          <div>
            <h1 className={style.h1register}>Regístrate a la plataforma B&R</h1>
          </div>

          <div className={style.inlineFields}>
            <div>
              <h4 className={style.h4register}>¿Ya tienes una cuenta creada?</h4>
            </div>

            <div>
              <Link className={style.linkRegister} to="/Login">
                Inicia sesión
              </Link>
            </div>
          </div>

          <div className={style.buttonsContainer}>
            <div className={style.loginButtonGoogle} onClick={googleHandler}>
              <img src={Google} alt="" className={style.icon} />
              Google
            </div>
            {/* <div className={style.loginButtonFb} onClick={facebookHandler}>
              <img src={Facebook} alt="" className={style.icon} />
              Facebook
            </div> */}
          </div>
          
          <div className={style.formfield}>
            <label className={style.labelRegister}>Nombre y Apellido</label>

            <input
              className={style.input}
              onChange={onInputChange}
              name="name_surName"
              type="text"
              value={dataRegistro.name_surName}
              // placeholder= ""
              required
            />
          </div>

          <div className={style.formfield}>
            <label className={style.labelRegister}>Fotografia</label>
            {/* <br /> */}
            <input
              className={style.input}
              // onChange={onInputChange}
              name="image"
              type="file"
              accept="image/*" // Especifica los tipos de archivo permitidos
              onChange={changeUploadImage}
              // value={dataRegistro.image}
              // placeholder= "Foto aca"
              required
            />
            {/* si subio archivo muetra el mensaje, el nombre y la imagen subida */}
            {urlImage && (
              <div className={style.contenedorimg}>
                {/* <p>Archivo seleccionado: {urlImage.name}</p> */}
                <img
                  src={urlImage}
                  className={style.imagenSubida}
                  alt="Imagen seleccionada"
                />
                <br />
                <button onClick={() => FuncionDeleteImage()}>
                  Eliminar imagen
                </button>
              </div>
            )}
          </div>

          <div className={style.formfield}>
            <label className={style.labelRegister}>Correo electronico</label>

            <input
              className={style.input}
              onChange={onInputChange}
              name="email"
              type="email"
              value={dataRegistro.email}
              placeholder="ejemplo@gmail.com"
              required
            />
          </div>

          <div className={style.formfield}>
            <label className={style.labelRegister}>Contraseña</label>

            <input
              className={style.input}
              onChange={onInputChange}
              name="password"
              type="password"
              value={dataRegistro.password}
              placeholder="Escriba su contraseña"
              required
            />
          </div>

          {/* //* pendiente en segundo semana */}
          <div className={style.formfield}>
            <label>Confirmar Contraseña</label>

            <input
              className={style.input}
              onChange={onInputChange}
              name="confirmPassword"
              type="password"
              value={dataRegistro.confirmPassword}
              placeholder="Escriba su contraseña"
              required
            />
          </div>

          <br />
          <div className={style.contenedorBoton}>
            <button type="submit" className={style.submitbutton}>
              Registrate
            </button>
          </div>

          {/* <div>
                        <img src={imagen} alt="img" />
                    </div> */}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
