import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LandingPage/LandingPage.module.css';
import imagen from '../../assets/landingbg.webp';
import logo from '../../assets/B&R.png'

function LandingPage() {
  return (
    <div className={styles['landing-page']}>
      <img src={logo} alt="Logo" className={styles['logo']} />
      <div className={styles.content}>
        <h1 className={styles['text']}>Juntos</h1>
        <h1 className={styles['text']}>iluminamos el</h1>
        <h1 className={styles['text']}>camino a casa</h1>
        <div className={styles['button-container']}>
          <Link to="/home">
            <button className={styles.button}>Ingresa al sitio</button>
          </Link>
          <Link to="/login">
            <button className={styles.button}>Inicia sesión</button>
          </Link>
        </div>
      </div>
      <img src={imagen} alt="imagen" className={styles['tu-imagen-class']} />
    </div>
  );
}

export { LandingPage };
