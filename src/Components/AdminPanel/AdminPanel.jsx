/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import logo from '../../assets/B&R.png';
import { Link } from 'react-router-dom';

const Navbar = ({ sidebarClosed, setActiveSection, activeSection }) => {
  return (
    <nav className={sidebarClosed ? 'close nav' : 'nav'}>
      <div className="logo-name">
        <div className="logo-image">
          <img src={logo} alt="img" />
        </div>

        <span className="logo_name">ByR</span>
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

const DashboardOverview = ({ reports }) => {
  return (
    <div className="overview">
      <div className="title">
        <i className="uil uil-tachometer-fast-alt"></i>
        <span className="text">Dashboard</span>
      </div>

      <div className="boxes">
        <div className="box box1">
          <i className="uil uil-thumbs-up"></i>
          <span className="text">Total Comments</span>
          <span className="number">{reports.total}</span>{' '}
        </div>
        <div className="box box2">
          <i className="uil uil-comments"></i>
          <span className="text">Total Comments Aprobados</span>
          <span className="number">{reports.total}</span>{' '}
        </div>
        <div className="box box3">
          <i className="uil uil-share"></i>
          <span className="text">Total Comments Eliminados</span>
          <span className="number">{reports.total}</span>{' '}
        </div>
      </div>
      <br />
      <div className="boxes">
        <div className="box box1">
          <i className="uil uil-thumbs-up"></i>
          <span className="text">Total Comments Pendientes</span>
          <span className="number">{reports.total}</span>{' '}
        </div>
        <div className="box box2">
          <i className="uil uil-comments"></i>
          <span className="text">Total Donaciones</span>
          <span className="number">{reports.total}</span>{' '}
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
          {users.map((user) => (
            <span className="data-list" key={user.id}>
              {user.name_surName}
            </span>
          ))}
        </div>
        <div className="data email">
          <span className="data-title">Email</span>
          {users.map((user) => (
            <span className="data-list" key={user.id}>
              {user.email}
            </span>
          ))}
        </div>
        <div className="data joined">
          <span className="data-title">Rol</span>
          {users.map((user) => (
            <span className="data-list" key={user.id}>
              {user.role}
            </span>
          ))}
        </div>
        <div className="data joined">
          <span className="data-title">Actions</span>
          {users.map((user) => (
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
    </div>
  );
};

const ComentariosTable = ({ comments, users }) => {
  return (
    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Listado de Comentarios</span>
      </div>
      <div className="activity-data">
        <div className="data names">
          <span className="data-title">Usuario</span>
          {users.map((user) => (
            <span className="data-list" key={user.id}>
              {user.name_surName}
            </span>
          ))}
        </div>
        <div className="data email">
          <span className="data-title">Comentario</span>
          {}
        </div>
        <div className="data joined">
          <span className="data-title">Fecha Publicacion</span>
          {}
        </div>
      </div>
    </div>
  );
};

const ReportTable = ({ reports }) => {
  return (
    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Listado de Reportes</span>
      </div>

      <div className="activity-data">
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
              <button className="btn-suspender" style={{ marginRight: 7 }}>
                Desaprobar
              </button>
              <button className="btn-aprobar" style={{ marginRight: 7 }}>
                Aprobar
              </button>
            </span>
          ))}
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
    </div>
  );
};

const RoleChangeModal = ({ isOpen, close, user }) => {
  const [selectedRole, setSelectedRole] = useState(user.role);

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const applyChanges = () => {
    // Logic to update the user role will go here
    console.log(`Updating role for ${user.name_surName} to ${selectedRole}`);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={() => close(false)}>
          <i className="uil uil-multiply"></i>
        </button>
        <h2>Cambiar rol para {user && user.name_surName}</h2>
        <label htmlFor="role-dropdown">Choose a role:</label>
        <select
          id="role-dropdown"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          <option value="usuario">Usuario</option>
          <option value="admin">Admin</option>
          <option value="banned">Banned</option>
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
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState({});
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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
        const response = await fetch('https://br-service.onrender.com/users');
        if (!response.ok) throw Error('Error fetching users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchReports = async () => {
      try {
        const response = await fetch('https://br-service.onrender.com/reports');
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
          'https://br-service.onrender.com/comments'
        );
        if (!response.ok) throw Error('Error fetching comments');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      }
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
                users={users}
                openModal={setModalOpen}
                setSelectedUser={setSelectedUser}
              />
            )}
            {activeSection === 'dashboard' && (
              <DashboardOverview reports={reports} />
            )}
            {activeSection === 'comentarios' && (
              <ComentariosTable comments={comments} users={users} />
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
