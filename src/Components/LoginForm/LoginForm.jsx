import axios from 'axios';
import style from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/B&R.png';
import { NavBar } from '../NavBar/NavBar';
import Google from '../../assets/google.png';
import Facebook from '../../assets/facebook.png';
import {
  postRegisterGoogleUser,
  postRegisterFacebookUser,
  postLoginUser
} from '../../Redux/actions';


const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [usuario, setUsuario] = useState(null);
  const [cargandoUsuario, setCargandoUsuario] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.email){
      navigate('/home');
    }
  },[user])

  const googleHandler = () => {
    dispatch(postRegisterGoogleUser());
  };

  // const facebookHandler = () => {
  //   dispatch(postRegisterFacebookUser());
  // };

  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
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
    dispatch(postLoginUser(dataLogin));   
  };

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

        <form onSubmit={onSubmit}>
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

          <div className={style.buttonsContainer}>
            <div className={style.loginButtonGoogle} onClick={googleHandler}>
              <img src={Google} alt="" className={style.icon} />
              Google
            </div>            
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;
