import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import profilePicture from "../../assets/profilepicture.png";
import logo from '../../assets/B&R.png'
import { NavBar } from "../NavBar/NavBar";
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
const Navbar = ({ sidebarClosed, setActiveSection, activeSection }) => {
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
          <img src={profilePicture} alt="Profile Picture" />
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
          </ul>

        </div>
      </nav>
    </div>
  );
};



const DashboardOverview = ({ reports, users, comments }) => {
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
                  <label htmlFor="fullName" style={{fontSize:"20px"}}>Nombre Completo:</label>
                  <h2>{"userName"}</h2>
                  {/* <input type="text" className={styles.formControl} id="fullName" placeholder="Ingresa nombre completo" /> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="eMail" style={{fontSize:"20px"}}>Email</label>
                  <h2>{"userEmail"}</h2>
                  {/* <input type="email" className={styles.formControl} id="eMail" placeholder="Ingresa el email" /> */}
                </div>
              </div>
            </div>
              
              
            
            
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-right">
                  {/* <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button> */}
                  <button type="button" id="submit" name="submit" className="btn btn-primary">Actualizar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const ComentariosTable = ({ comments, users }) => {

  const disapproveComment = async (comentId) => {
    let disapprove = {
      state: "refused",
    }
    try {
      Swal.fire({
        title: 'Quieres desaprobar el comentario?',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `Cancelar`,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          const response = await axios.put(`https://br-service.onrender.com/admin/Comments/${comentId}`, disapprove)
          if (response.status === 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Successfully Disapproved'
            })
          }
        } else if (result.isDenied) {
          Swal.fire('Accion cancelada', '', 'info')
        }
      })


    } catch (error) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Error al rechazar el comentario'
      })

    }
  };


  const approveComment = async (comentId) => {
    let approve = {
      state: "approved",
    }
    try {
      Swal.fire({
        title: 'Quieres aprobar el comentario?',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `Cancelar`,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          const response = await axios.put(`https://br-service.onrender.com/admin/Comments/${comentId}`, approve)
          if (response.status === 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Successfully approved'
            })
          }
        } else if (result.isDenied) {
          Swal.fire('Accion cancelada', '', 'info')
        }
      })


    } catch (error) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Error al aprobar el comentario'
      })
    }

  }

  return (
    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Listado de Comentarios</span>
      </div>
      <div className="activity-data" style={{ border: "1px groove black", padding: "3px", borderRadius: "10px" }}>
        <div className="data names">
          <span className="data-title">Usuario</span>
          {comments ? users?.map((user) => (
            <span className="data-list" key={user.id} style={{ border: "1px groove black", borderRadius: "5px" }}>
              {user.name_surName}
            </span>
          )) : null}
        </div>
        <div className="data email">
          <span className="data-title">Comentario</span>
          {comments?.map((comment) => (
            <span className="data-list" key={comment.id} style={{ border: "1px groove black", borderRadius: "5px" }}>
              {comment.comment}
            </span>
          ))}
        </div>
        <div className="data joined">
          <span className="data-title">Fecha Publicacion</span>
          {comments?.map((comment) => (
            <span className="data-list" key={comment.id} style={{ border: "1px groove black", borderRadius: "5px" }}>
              {comment.createdAt.split("T")[0]}
            </span>
          ))}
        </div>
        <div className="data joined">
          <span className="data-title">Actions</span>
          {comments?.map((coment) => (
            <span className="data-list" key={coment.id}>
              <button className="btn-suspender" style={{ marginRight: 7 }} onClick={() => disapproveComment(coment.id)}>
                Desaprobar
              </button>
              <button className="btn-aprobar" style={{ marginRight: 7 }} onClick={() => approveComment(coment.id)}>
                Aprobar
              </button>
            </span>
          ))}
        </div>
      </div>
      {
        comments === undefined ? <div><span style={{ fontSize: "1.5rem", marginTop: "5rem" }}>No pending comments currently</span></div> : null
      }

    </div>
  );
};



const ReportTable = ({ reports }) => {

  const disapproveReport = async (reportId) => {
    let disapprove = {
      status: "refused",
    }
    try {
      Swal.fire({
        title: 'Quieres Desaprobar el Reporte?',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `Cancelar`,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          const response = await axios.put(`https://br-service.onrender.com/admin/Reports/${reportId}`, disapprove)
          if (response.status === 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Successfully Disapproved'
            })
          }
        } else if (result.isDenied) {
          Swal.fire('Acción cancelada', '', 'info')
        }
      })


    } catch (error) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Error al rechazar reporte :('
      })

    }
  };


  const approveReport = async (reportId) => {
    let approve = {
      status: "approved",
    }
    try {
      Swal.fire({
        title: 'Quieres aprobar el Reporte?',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `Cancelar`,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          const response = await axios.put(`https://br-service.onrender.com/admin/Reports/${reportId}`, approve)
          if (response.status === 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Successfully approved'
            })
          }
        } else if (result.isDenied) {
          Swal.fire('Accion cancelada', '', 'info')
        }
      })


    } catch (error) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Error al aprobar reporte :('
      })
    }

  }


  return (
    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Listado de Reportes</span>
      </div>

      <div className="activity-data" >
        <div className="data names">
          <span className="data-title">Nombre</span>
          {reports.reports.map((report) => (
            <span className="data-list" key={report.id}>
              {report.name}
            </span>
          ))}
        </div>

        <div className="data joined">
          <span className="data-title">Descripcion</span>
          {reports.reports.map((report) => (
            <span className="data-list" key={report.id}>
              {report.description}
            </span>
          ))}
        </div>

        <div className="data joined">
          <span className="data-title">Fecha Reporte</span>
          {reports.reports.map((report) => (
            <span className="data-list" key={report.id}>
              {report.date}
            </span>
          ))}
        </div>

        <div className="data joined">
          <span className="data-title">Actions</span>
          {reports.reports.map((report) => (
            <span className="data-list" key={report.id}>
              <button className="btn-suspender" style={{ marginRight: 7 }} onClick={() => disapproveReport(report.id)}>
                Desaprobar
              </button>
              <button className="btn-aprobar" style={{ marginRight: 7 }} onClick={() => approveReport(report.id)}>
                Aprobar
              </button>
            </span>
          ))}
        </div>
      </div>
      {
        reports === undefined ? <div><span style={{ fontSize: "1.5rem", marginTop: "5rem" }}>No pending Reports currently</span></div> : null
      }
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

      <div className="activity-data">
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
      </div>
      {
        donations === undefined ? <div><span style={{ fontSize: "1.5rem", marginTop: "5rem" }}>No donations here yet {":)"}</span></div> : null
      }
    </div>
  );
};




const Profile = () => {
  const [users, setUsers] = useState({});
  const [reports, setReports] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const getStatus = localStorage.getItem('status');
    if (getStatus && getStatus === 'close') {
      setSidebarClosed(true);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarClosed((prevStatus) => {
      const newStatus = !prevStatus;
      localStorage.setItem('status', newStatus ? 'close' : 'open');
      return newStatus;
    });
  };

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('https://br-service.onrender.com/admin/Reports');
        if (!response.ok) throw Error('Error fetching reports');
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://br-service.onrender.com/admin/Comments"
        );
        if (!response.ok) throw Error('Error fetching comments');
        const data = await response.json();
        setComments(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    Promise.all([fetchReports(), fetchComments()]).finally(() =>
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
              <DashboardOverview reports={reports} comments={comments} users={users} />
            )}
            {activeSection === 'comentarios' && (
              <ComentariosTable comments={comments.comments} users={users.users} />
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