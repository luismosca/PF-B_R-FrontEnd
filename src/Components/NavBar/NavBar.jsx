import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import { deleteToken } from '../../auth-helpers/auth-helpers';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/actions';
const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleLogOut = () => {
    deleteToken();
    dispatch(logOut());
  };

  return (
    <>
      <nav className={style.navBar}>
        <ul>
          {user && user.id ? (
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
          ) : null}
          <li>
            <Link to="/ByR">Acerca de B&R</Link>
          </li>
          <li>
            <Link to="/donacion">¡Únete a la causa!</Link>
          </li>
          {user && user.role === 'admin' ? (
            <li>
              <Link to="/admin">Panel Administrador</Link>
            </li>
          ) : null}

          {user && user.id ? (
            <li>
              <Link to="/" onClick={handleLogOut}>
                Cerrar Sesión
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Inicia sesión</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export { NavBar };
