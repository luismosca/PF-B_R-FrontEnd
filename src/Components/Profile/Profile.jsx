import React from "react";
import styles from "./Profile.module.css"; 
import profilePicture from "../../assets/profilepicture.png";
import logo from '../../assets/B&R.png'

const Profile = () => {
    return (
      <>
        <a href="/home">
          <img src={logo} alt="Logo" className={styles['logo']} />
        </a>
        <div className={styles["profile-dashboard"]}>
          <div className={styles["left-menu"]}>
            <div className={styles["profile-picture"]}>
              <img src={profilePicture} alt="Profile Picture" />
            </div>
            <ul>
              <li>
                <a href="/edit-profile">Configuración de perfil</a>
              </li>
              <li>
                <a href="/reports">Mis reportes</a>
              </li>
              <li>
                <a href="/donations">Mis donaciones</a>
              </li>
              <li>
                <a href="/notifications">Notificaciones</a>
              </li>
            </ul>
          </div>
          <div className={styles["main-content"]}></div>
        </div>
      </>
    );
  };
  
  export default Profile;