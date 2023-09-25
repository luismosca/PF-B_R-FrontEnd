import React from 'react';
import { Link, } from 'react-router-dom';
import style from './NavBar.module.css'; 


const NavBar = () => {
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
      </ul>
    </nav>
    </>
  );
};

export { NavBar };