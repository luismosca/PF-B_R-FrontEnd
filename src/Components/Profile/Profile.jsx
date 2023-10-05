import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import logo from '../../assets/B&R.png'
import { NavBar } from "../NavBar/NavBar";
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import TableUser from '../DonationTableUser/TableUser'
import Cards from "../Cards/Cards";
import style from "../HomePage/HomePage.module.css";

const Navbar = ({ sidebarClosed, setActiveSection, activeSection }) => {

  const user = useSelector(state => state.user);
  const nombre = user.name
  const idUser = user.id
  console.log(user);

  return (
    <div>
      <NavBar />

      <nav className={sidebarClosed ? 'close nav' : 'nav'}>
        <div className="logo-name">

          <Link to="/home">
            <div className="logo-image" style={{}}>
              <i className="uil uil-signout"></i>
              <img src={logo} alt="img" style={{ width: "200px", height: "150px" }} />
            </div>
          </Link>

        </div>
        <div className={styles["profile-picture"]} style={{ margin: "15px" }}>
          <img src={user.image} alt="Profile Picture" style={{ height: "200px", width: "200px", borderRadius: "50%", marginLeft: "0px" }} />
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <li
              style={{ margin: 0 }}
              onClick={() => setActiveSection('dashboard')}
            >
              <a
                href="#"
                className={activeSection === 'dashboard' ? 'active-nav-item' : ''}
              >
                <i className="uil uil-estate"></i>
                <span className="link-name">Perfil</span>
              </a>
            </li>

            <li
              style={{ margin: 0 }}
              onClick={() => setActiveSection('donaciones')}
            >
              <a
                href="#"
                className={
                  activeSection === 'donaciones' ? 'active-nav-item' : ''
                }
              >
                <i className="uil uil-files-landscapes"></i>
                <span className="link-name">Mis Donaciones</span>
              </a>
            </li>
            <li
              style={{ margin: 0 }}
              onClick={() => setActiveSection('reportes')}
            >
              <a
                href="#"
                className={activeSection === 'reportes' ? 'active-nav-item' : ''}
              >
                <i className="uil uil-files-landscapes"></i>
                <span className="link-name">Mis Reportes</span>
              </a>
            </li>

            <li
              style={{ margin: 0 }}
              // onClick={() => setActiveSection('reportes')}
            >
              <a
                href="#"
                // className={activeSection === 'reportes' ? 'active-nav-item' : ''}
              >
                <i className="uil uil-files-landscapes"></i>
                <span className="link-name">
                  <Link  to="/reporte">
                    Hacer un reporte 
                  </Link>
                </span>
              </a>
            </li>
            
          </ul>

        </div>
      </nav>
    </div>
  )
};


const DashboardOverview = ({ reports, users, comments, }) => {
  const user = useSelector(state => state.user);
  return (
    <div className="overview">
      <div className="title">
        <i className="uil uil-tachometer-fast-alt"></i>
        <span className="text">Perfil</span>
      </div>

      <div className={styles.formControl}>
        <div className="card h-100">
          <div className={styles.card}>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1 className="mb-2 text-primary">Información Personal</h1>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  {/* <label htmlFor="fullName" style={{fontSize:"20px"}}>Nombre Completo: {user.name}</label> */}
                  <div className={styles.contenedorH1Verde}>
                    <h1>Nombre:</h1>
                  </div>
                  <div className={styles.contenedorH1Azul}>
                    <h1>{user.name}</h1>
                  </div>
                  {/* <h2>{user.name}</h2> */}
                  {/* <input type="text" className={styles.formControl} id="fullName" placeholder="Ingresa nombre completo" /> */}
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  {/* <label htmlFor="eMail" style={{fontSize:"20px"}}>Email: </label> */}
                  <div className={styles.contenedorH1Verde}>
                    <h1>Correo: </h1>
                  </div>
                  <div className={styles.contenedorH1Azul}>
                    <h1>{user.email}</h1>
                  </div>
                  {/* <h2>{user.email}</h2> */}
                  {/* <input type="email" className={styles.formControl} id="eMail" placeholder="Ingresa el email" /> */}
                  <br />
                  <div>
                    <div className={styles.contenedorH1Verde}>
                      <h1>Rol: </h1>
                    </div>
                    <div className={styles.contenedorH1Azul}>
                      <h1>{user.role} </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {/* <div className="text-right"> */}
                {/* <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button> */}
                {/* <button type="button" id="submit" name="submit" className="btn btn-primary">Actualizar</button> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





const ReportTable = ({ reports }) => {


  // const deleteReports = async (reportId) => {
  //   let deleteReport = {
  //     status: "deleted",
  //   }
  //   try {
  //     Swal.fire({
  //       title: 'Quieres Desaprobar el Reporte?',
  //       showDenyButton: true,
  //       // showCancelButton: true,
  //       confirmButtonText: 'Si',
  //       denyButtonText: `Cancelar`,
  //     }).then(async (result) => {
  //       /* Read more about isConfirmed, isDenied below */
  //       if (result.isConfirmed) {
  //         const response = await axios.put(`http://localhost:3001/admin/Reports/${reportId}`, deleteReport)
  //         if (response.status === 200) {
  //           const Toast = Swal.mixin({
  //             toast: true,
  //             position: 'top-end',
  //             showConfirmButton: false,
  //             timer: 3000,
  //             timerProgressBar: true,
  //             didOpen: (toast) => {
  //               toast.addEventListener('mouseenter', Swal.stopTimer)
  //               toast.addEventListener('mouseleave', Swal.resumeTimer)
  //             }
  //           })

  //           Toast.fire({
  //             icon: 'success',
  //             title: 'Reporte eliminado'
  //           })
  //         }
  //       } else if (result.isDenied) {
  //         Swal.fire('Acción cancelada', '', 'info')
  //       }
  //     })


  //   } catch (error) {

  //     const Toast = Swal.mixin({
  //       toast: true,
  //       position: 'top-end',
  //       showConfirmButton: false,
  //       timer: 3000,
  //       timerProgressBar: true,
  //       didOpen: (toast) => {
  //         toast.addEventListener('mouseenter', Swal.stopTimer)
  //         toast.addEventListener('mouseleave', Swal.resumeTimer)
  //       }
  //     })

  //     Toast.fire({
  //       icon: 'error',
  //       title: 'Error al eliminar el reporte :('
  //     })

  //   }
  // };

  // const completeReport = async (reportId) => {
  //   let completeReport = {
  //     status: "deleted",
  //   }
  //   try {
  //     Swal.fire({
  //       title: 'Quieres Desaprobar el Reporte?',
  //       showDenyButton: true,
  //       // showCancelButton: true,
  //       confirmButtonText: 'Si',
  //       denyButtonText: `Cancelar`,
  //     }).then(async (result) => {
  //       /* Read more about isConfirmed, isDenied below */
  //       if (result.isConfirmed) {
  //         const response = await axios.put(`http://localhost:3001/admin/Reports/${reportId}`, completeReportReport)
  //         if (response.status === 200) {
  //           const Toast = Swal.mixin({
  //             toast: true,
  //             position: 'top-end',
  //             showConfirmButton: false,
  //             timer: 3000,
  //             timerProgressBar: true,
  //             didOpen: (toast) => {
  //               toast.addEventListener('mouseenter', Swal.stopTimer)
  //               toast.addEventListener('mouseleave', Swal.resumeTimer)
  //             }
  //           })

  //           Toast.fire({
  //             icon: 'success',
  //             title: 'Reporte eliminado'
  //           })
  //         }
  //       } else if (result.isDenied) {
  //         Swal.fire('Acción cancelada', '', 'info')
  //       }
  //     })


  //   } catch (error) {

  //     const Toast = Swal.mixin({
  //       toast: true,
  //       position: 'top-end',
  //       showConfirmButton: false,
  //       timer: 3000,
  //       timerProgressBar: true,
  //       didOpen: (toast) => {
  //         toast.addEventListener('mouseenter', Swal.stopTimer)
  //         toast.addEventListener('mouseleave', Swal.resumeTimer)
  //       }
  //     })

  //     Toast.fire({
  //       icon: 'error',
  //       title: 'Error al eliminar el reporte :('
  //     })

  //   }
  // };



  return (

    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Mis Reportes</span>
      </div>

      <div className="activity-data" >

        <div className="data joined">
          {/* <span className="data-title">Actions</span> */}
          <div className={styles.containerUl}>
            <Link className={styles.ulReporte} to="/reporte">
              Hacer un reporte 
            </Link>
          </div>
          {
            reports ?
              <Cards className={style.container} allReports={reports} />
              : <div><span style={{ fontSize: "1.5rem", marginTop: "5rem" }}>No tienes reportes activos</span></div>
          }
        </div>
      </div>

    </div>
  );
};



const DonacionesTable = ({ donations }) => {
  return (
    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Listado de Donaciones</span>
      </div>

      <div>
        <TableUser></TableUser>
      </div>

      {/* <div className="activity-data">
        <div className="data names">
          <span className="data-title">Usuario</span>
        </div>
        <div className="data email">
          <span className="data-title">Donacion</span>
        </div>
        <div className="data joined">
          <span className="data-title">Fecha Donacion</span>
        </div>
        <div className="data joined">
          <span className="data-title">Monto</span>
        </div>
      </div> */}
      {/* {
        donations === undefined ? <div><span style={{ fontSize: "1.5rem", marginTop: "5rem" }}>No donations here yet {":)"}</span></div> : null
      } */}
    </div>
  );
};




const Profile = () => {
  const [reports, setReports] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);
  const user = useSelector(state => state.user);

  useEffect(() => {
    const getStatus = localStorage.getItem('status');
    if (getStatus && getStatus === 'close') {
      setSidebarClosed(true);
    }
  }, []);

  //  <div className={styles["profile-dashboard"]}>

  //    <div className={styles["left-menu"]}>
  //      <div className={styles["profile-picture"]}>
  //        <img src={profilePicture} alt="Profile Picture" />
  //      </div>
  //      <ul>
  //        <li>
  //          <a href="/edit-profile">Configuración de perfil</a>
  //        </li>
  //        <li>
  //          <a href="/reporte">Crear reporte</a>
  //        </li>
  //        <li>
  //          <a href="/tabla/user">Mis donaciones</a>
  //        </li>
  //        <li>
  //          <a href="/notifications">Notificaciones</a>
  //        </li>
  //      </ul>
  //    </div>
  //    <div className={styles["main-content"]}></div>
  //  </div>


  const toggleSidebar = () => {
    setSidebarClosed((prevStatus) => {
      const newStatus = !prevStatus;
      localStorage.setItem('status', newStatus ? 'close' : 'open');
      return newStatus;
    });
  };
  const userEmail = {
    email: user.email
  }
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/reports/user/`, userEmail);
        const data = response.data
        if (response.data?.total > 0) {
          setReports(data.reports);
        }

      } catch (error) {
        console.error(error);
      }
    };


    Promise.all([fetchReports()]).finally(() =>
      setIsLoading(false)
    );
  }, []);

  return (
    <div>
      <Navbar
        sidebarClosed={sidebarClosed}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      {isLoading ? (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="dashboard">
          <div className="top">
            <i
              className="uil uil-bars sidebar-toggle"
              onClick={toggleSidebar}
            ></i>

            <img src="images/profile.jpg" alt="" />
          </div>
          <div className="dash-content">

            {activeSection === 'dashboard' && (
              <DashboardOverview />
            )}
            {activeSection === 'comentarios' && (
              <ComentariosTable comments={comments.comments} />
            )}
            {activeSection === 'reportes' && <ReportTable reports={reports} />}
            {activeSection === 'donaciones' && <DonacionesTable />}

          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;