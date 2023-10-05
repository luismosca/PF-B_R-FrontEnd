/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import logo from '../../assets/B&R.png';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Table from '../Donationstable/Table';
import { getToken } from '../../auth-helpers/auth-helpers';

const Navbar = ({ sidebarClosed, setActiveSection, activeSection }) => {
  return (
    <nav className={sidebarClosed ? 'close nav' : 'nav'}>
      <div className="logo-name">
        <div className="logo-image">
          <img src={logo} alt="img" />
        </div>

        <Link to="/home">
          <i className="uil uil-signout"></i>
          <span className="logo_name">ByR</span>
        </Link>
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
              <span className="link-name">Dashboard</span>
            </a>
          </li>
          <li
            style={{ margin: 0 }}
            onClick={() => setActiveSection('comentarios')}
          >
            <a
              href="#"
              className={
                activeSection === 'comentarios' ? 'active-nav-item' : ''
              }
            >
              <i className="uil uil-files-landscapes"></i>
              <span className="link-name">Comentarios</span>
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
              <span className="link-name">Donaciones</span>
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
              <span className="link-name">Reportes</span>
            </a>
          </li>
          <li
            style={{ margin: 0 }}
            onClick={() => setActiveSection('usuarios')}
          >
            <a
              href="#"
              className={activeSection === 'usuarios' ? 'active-nav-item' : ''}
            >
              <i className="uil uil-chart"></i>
              <span className="link-name">Usuarios</span>
            </a>
          </li>
        </ul>

        <ul className="logout-mode">
          <li style={{ margin: 0 }}>
            <Link to="/home">
              <i className="uil uil-signout"></i>
              <span className="link-name">Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const DashboardOverview = ({ reports, users, comments }) => {
  return (
    <div className="overview">
      <div className="title">
        <i className="uil uil-tachometer-fast-alt"></i>
        <span className="text">Dashboard</span>
      </div>

      <div className="boxes">
        <div className="box box1">
          <i className="uil uil-thumbs-up"></i>
          <span className="text">Total Pending Reports</span>
          <span className="number">
            {reports.total ? reports.total : 0}
          </span>{' '}
        </div>
        <div className="box box2">
          <i className="uil uil-comments"></i>
          <span className="text">Total Pending Comments</span>
          <span className="number">
            {comments.total ? comments.total : 0}
          </span>{' '}
        </div>
        <div className="box box3">
          <i className="uil uil-share"></i>
          <span className="text">Total Users</span>
          <span className="number">{users.total ? users.total : 0}</span>{' '}
        </div>
      </div>
      <br />
      <div className="boxes">
        <div className="box box1">
          <i className="uil uil-thumbs-up"></i>
          <span className="text">Total Donaciones</span>
          <span className="number">{}</span>{' '}
        </div>
        <div className="box box2">
          <i className="uil uil-comments"></i>
          <span className="text">---</span>
          <span className="number">{}</span>{' '}
        </div>
        <div className="box box3">
          <i className="uil uil-comments"></i>
          <span className="text">---</span>
          <span className="number">{}</span>{' '}
        </div>
      </div>
    </div>
  );
};

const UsuariosTable = ({ users, openModal, setSelectedUser }) => {
  return (
    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Listado de Usuarios</span>
      </div>

      <div className="activity-data">
        <div className="data names">
          <span className="data-title">Usuario</span>
          {users?.map((user) => (
            <span className="data-list" key={user.id}>
              {user.name_surName}
            </span>
          ))}
        </div>
        <div className="data email">
          <span className="data-title">Email</span>
          {users?.map((user) => (
            <span className="data-list" key={user.id}>
              {user.email}
            </span>
          ))}
        </div>
        <div className="data joined">
          <span className="data-title">Rol</span>
          {users?.map((user) => (
            <span className="data-list" key={user.id}>
              {user.role}
            </span>
          ))}
        </div>
        <div className="data joined">
          <span className="data-title">Actions</span>
          {users?.map((user) => (
            <span className="data-list" key={user.id}>
              <button className="btn-suspender" style={{ marginRight: 7 }}>
                Suspender
              </button>
              <button
                className="btn-rol"
                onClick={() => {
                  setSelectedUser(user);
                  openModal(true);
                }}
              >
                Cambiar Rol
              </button>
            </span>
          ))}
        </div>
      </div>
      {users === undefined ? (
        <div>
          <span style={{ fontSize: '1.5rem', marginTop: '5rem' }}>
            No currently registered/logged Users
          </span>
        </div>
      ) : null}
    </div>
  );
};

const ComentariosTable = ({ comments, users }) => {
  const disapproveComment = async (comentId) => {
    let disapprove = {
      state: 'refused',
    };
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
          const response = await axios.put(
            `https://br-service.onrender.com/admin/Comments/${comentId}`,
            disapprove
          );
          if (response.status === 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: 'success',
              title: 'Successfully Disapproved',
            });
          }
        } else if (result.isDenied) {
          Swal.fire('Accion cancelada', '', 'info');
        }
      });
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'Error al rechazar el comentario',
      });
    }
  };

  const approveComment = async (comentId) => {
    let approve = {
      state: 'approved',
    };
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
          const response = await axios.put(
            `https://br-service.onrender.com/admin/Comments/${comentId}`,
            approve
          );
          if (response.status === 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: 'success',
              title: 'Successfully approved',
            });
          }
        } else if (result.isDenied) {
          Swal.fire('Accion cancelada', '', 'info');
        }
      });
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'Error al aprobar el comentario',
      });
    }
  };

  return (
    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Listado de Comentarios</span>
      </div>
      <div
        className="activity-data"
        style={{
          border: '1px groove black',
          padding: '3px',
          borderRadius: '10px',
        }}
      >
        <div className="data names">
          <span className="data-title">Usuario</span>
          {comments
            ? users?.map((user) => (
                <span
                  className="data-list"
                  key={user.id}
                  style={{ border: '1px groove black', borderRadius: '5px' }}
                >
                  {user.name_surName}
                </span>
              ))
            : null}
        </div>
        <div className="data email">
          <span className="data-title">Comentario</span>
          {comments?.map((comment) => (
            <span
              className="data-list"
              key={comment.id}
              style={{ border: '1px groove black', borderRadius: '5px' }}
            >
              {comment.comment}
            </span>
          ))}
        </div>
        <div className="data joined">
          <span className="data-title">Fecha Publicacion</span>
          {comments?.map((comment) => (
            <span
              className="data-list"
              key={comment.id}
              style={{ border: '1px groove black', borderRadius: '5px' }}
            >
              {comment.createdAt.split('T')[0]}
            </span>
          ))}
        </div>
        <div className="data joined">
          <span className="data-title">Actions</span>
          {comments?.map((coment) => (
            <span className="data-list" key={coment.id}>
              <button
                className="btn-suspender"
                style={{ marginRight: 7 }}
                onClick={() => disapproveComment(coment.id)}
              >
                Desaprobar
              </button>
              <button
                className="btn-aprobar"
                style={{ marginRight: 7 }}
                onClick={() => approveComment(coment.id)}
              >
                Aprobar
              </button>
            </span>
          ))}
        </div>
      </div>
      {comments === undefined ? (
        <div>
          <span style={{ fontSize: '1.5rem', marginTop: '5rem' }}>
            No pending comments currently
          </span>
        </div>
      ) : null}
    </div>
  );
};

const ReportTable = ({ reports }) => {
  const disapproveReport = async (reportId) => {
    let disapprove = {
      status: 'refused',
    };
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
          const response = await axios.put(
            `https://br-service.onrender.com/admin/Reports/${reportId}`,
            disapprove
          );
          if (response.status === 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: 'success',
              title: 'Successfully Disapproved',
            });
          }
        } else if (result.isDenied) {
          Swal.fire('Acción cancelada', '', 'info');
        }
      });
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'Error al rechazar reporte :(',
      });
    }
  };

  const approveReport = async (reportId) => {
    let approve = {
      status: 'approved',
    };
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
          const response = await axios.put(
            `https://br-service.onrender.com/admin/Reports/${reportId}`,
            approve
          );
          if (response.status === 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: 'success',
              title: 'Successfully approved',
            });
          }
        } else if (result.isDenied) {
          Swal.fire('Accion cancelada', '', 'info');
        }
      });
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'Error al aprobar reporte :(',
      });
    }
  };

  return (
    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Listado de Reportes</span>
      </div>

      <div className="activity-data">
        <div className="data names">
          <span className="data-title">Nombre</span>
          {reports.reports?.map((report) => (
            <span className="data-list" key={report.id}>
              {report.name}
            </span>
          ))}
        </div>

        <div className="data joined">
          <span className="data-title">Descripcion</span>
          {reports.reports?.map((report) => (
            <span className="data-list" key={report.id}>
              {report.description}
            </span>
          ))}
        </div>

        <div className="data joined">
          <span className="data-title">Fecha Reporte</span>
          {reports.reports?.map((report) => (
            <span className="data-list" key={report.id}>
              {report.date}
            </span>
          ))}
        </div>

        <div className="data joined">
          <span className="data-title">Actions</span>
          {reports.reports?.map((report) => (
            <span className="data-list" key={report.id}>
              <button
                className="btn-suspender"
                style={{ marginRight: 7 }}
                onClick={() => disapproveReport(report.id)}
              >
                Desaprobar
              </button>
              <button
                className="btn-aprobar"
                style={{ marginRight: 7 }}
                onClick={() => approveReport(report.id)}
              >
                Aprobar
              </button>
            </span>
          ))}
        </div>
      </div>
      {reports === undefined ? (
        <div>
          <span style={{ fontSize: '1.5rem', marginTop: '5rem' }}>
            No pending Reports currently
          </span>
        </div>
      ) : null}
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

      <div>
        <Table></Table>
      </div>
      {/* {
        donations === undefined ? <div><span style={{ fontSize: "1.5rem", marginTop: "5rem" }}>No donations here yet {":)"}</span></div> : null
      } */}
    </div>
  );
};

const RoleChangeModal = ({ isOpen, close, user }) => {
  const [selectedRole, setSelectedRole] = useState(user.role);

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const applyChanges = async () => {
    let role = {
      role: selectedRole,
    };
    try {
      const response = await axios.put(
        `https://br-service.onrender.com/admin/Users/${user.id}`,
        role
      );

      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Rol del usuario: ${
            user.name_surName
          } actualizado a ${selectedRole.toUpperCase()} `,
          showConfirmButton: false,
          timer: 7500,
        }).then(() => {
          // Esta parte del código se ejecutará después de que se cierre la alerta
          setTimeout(() => {
            // window.location.reload();
          }, 0); // Puedes usar un tiempo de espera muy corto como 0
        });
        console.log(
          `Actualización exitosa para ${user.name_surName} a ${selectedRole}`
        );
      } else {
        console.error('Error al actualizar');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={() => close(false)}>
          <i className="uil uil-multiply"></i>X
        </button>
        <h2>Cambiar rol para {user && user.name_surName}</h2>
        <label htmlFor="role-dropdown">Choose a role:</label>
        <select
          id="role-dropdown"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          className={`apply-changes-button${
            selectedRole.toLowerCase() === user.role.toLowerCase()
              ? '-disabled'
              : ''
          }`}
          onClick={applyChanges}
          disabled={selectedRole.toLowerCase() === user.role.toLowerCase()}
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
};

const AdminPanel = () => {
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
    const fetchUsers = async () => {
      try {
        const token = getToken();
        const response = await axios.request({
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: 'GET',
          url: `https://br-service.onrender.com/admin/Users`,
        });

        // if (response !== 200) throw Error('Error fetching users');
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchReports = async () => {
      try {
        const token = getToken();
        const response = await axios.request({
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: 'GET',
          url: `https://br-service.onrender.com/admin/Reports/`,
        });

        // if (response !== 200) throw Error('Error fetching users');
        const data = response.data;
        setReports(data);
      } catch (error) {
        console.error(error);
      }
      // try {
      //   const response = await axios.get('https://br-service.onrender.com/admin/Reports');
      //   // if (response !== 200) throw Error('Error fetching reports');
      //   const data = response.data
      //   setReports(data);
      // } catch (error) {
      //   console.error(error);
      // }
    };

    const fetchComments = async () => {
      try {
        const token = getToken();
        const response = await axios.request({
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: 'GET',
          url: 'https://br-service.onrender.com/admin/Comments',
        });

        // if (response !== 200) throw Error('Error fetching users');
        const data = response.data;
        setComments(data);
      } catch (error) {
        console.error(error);
      }
      // try {
      //   const response = await axios.get(
      //     "https://br-service.onrender.com/admin/Comments"
      //   );
      //   // if (!response.ok) throw Error('Error fetching comments');
      //   const data =  response.data;
      //   setComments(data);
      //   console.log(data);
      // } catch (error) {
      //   console.error(error);
      // }
    };

    Promise.all([fetchReports(), fetchUsers(), fetchComments()]).finally(() =>
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
            {activeSection === 'usuarios' && (
              <UsuariosTable
                users={users.users}
                openModal={setModalOpen}
                setSelectedUser={setSelectedUser}
              />
            )}
            {activeSection === 'dashboard' && (
              <DashboardOverview
                reports={reports}
                comments={comments}
                users={users}
              />
            )}
            {activeSection === 'comentarios' && (
              <ComentariosTable
                comments={comments.comments}
                users={users.users}
              />
            )}
            {activeSection === 'reportes' && <ReportTable reports={reports} />}
            {activeSection === 'donaciones' && <DonacionesTable />}
            {isModalOpen && (
              <RoleChangeModal
                isOpen={isModalOpen}
                close={setModalOpen}
                user={selectedUser}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
