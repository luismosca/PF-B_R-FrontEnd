import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { deleteToken } from "../../auth-helpers/auth-helpers";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/actions";
const NavBar = () => {
  const dispatch = useDispatch();
  
  const handleLogOut = () => {
    deleteToken();
    dispatch(logOut());
  }

  return (
    <>
      <nav className={style.navBar}>
        <ul>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <Link to="/ByR">Acerca de B&R</Link>
          </li>
          <li>
            <Link to="/donacion">¡Únete a la causa!</Link>
          </li>
        <li>
          <Link to="/admin">Panel Administrador</Link>
        </li>
          <li>
            <Link to="/home" onClick={handleLogOut}>Cerrar Sesión</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { NavBar };
