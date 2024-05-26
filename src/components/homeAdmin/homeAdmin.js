import React, { useEffect, useState } from 'react';
import './homeAdmin.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faCalendarPlus, faBell, } from '@fortawesome/free-regular-svg-icons';
import { Nav, Collapse, Dropdown } from 'react-bootstrap';
import { useKeycloak } from '../Keycloak/KeycloakContext';
import CreateShift from '../Shift/createShift';
import RegistryShit from '../CreateShift/RegistryShit';
import Dashboard from '../Dashboard/Dashboard';
import ListShift from '../ListShift/ListShift';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Table, Button } from 'react-bootstrap';

library.add(fas);


function AdministratorHomepage() {

  const keycloak = useKeycloak();

  const handleLogout = async () => {
    if (keycloak) {
      await keycloak.logout({ redirectUri: 'http://localhost:3000/' });
      // Aquí puedes actualizar el estado de la autenticación en tu aplicación si es necesario
    }
  };



  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const backendUrl = process.env.REACT_APP_BCKEND;
      if (!backendUrl) {
        console.error('REACT_APP_BCKEND está indefinido');
        return;
      }

      try {
        const response = await axios.get(`${backendUrl}/listUsers/listAll`);
        setData(response.data);
      } catch (error) {
        console.error('Error al cargar los datos', error);
      }
    };

    fetchData();
  }, []);

 



  

  const [open, setOpen] = useState(false);
  const [mostrarTablaUsuarios, setMostrarTablaUsuarios] = useState(false);
  const [mostrarCrearShift, setMostrarCrearShift] = useState(false);
  const [mostrarListaTurnos, setMostrarListaTurnos] = useState(false);
  const [shouldUpdateTable, setShouldUpdateTable] = useState(false);
  const [mostrarNuevoComponente, setMostrarNuevoComponente] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  const handleUsuariosClick = () => {
    setMostrarTablaUsuarios(true);
    setMostrarCrearShift(false);
    setMostrarListaTurnos(false);
    setMostrarNuevoComponente(false);
  };

  const handleCrearClick = () => {
    setMostrarTablaUsuarios(false);
    setMostrarCrearShift(true);
    setMostrarListaTurnos(false);
    setMostrarNuevoComponente(false);
  };



  const handleDashboardClick = () => {
    setMostrarTablaUsuarios(false);
    setMostrarCrearShift(false);
    setMostrarListaTurnos(false);
    setMostrarNuevoComponente(false);
  };

  const handleListaClick = () => {
    setMostrarTablaUsuarios(false);
    setMostrarCrearShift(false);
    setMostrarListaTurnos(true);
    setMostrarNuevoComponente(false);
  };

  const handleShowCreateShift = (userId) => {
    setSelectedUser(userId);
    setMostrarTablaUsuarios(false);
    setMostrarCrearShift(false);
    setMostrarListaTurnos(false);
    setMostrarNuevoComponente(true);
  };

  return (

    <div>
      <div class="container-fluid" style={{ height: '100vh' }}>
        <div class="row h-100">
          <div class="col-lg-3 border-end bg-gray-100 p-0 menu">
            <div class="d-flex flex-column h-100 gap-2">
              <div class="d-flex align-items-center border-bottom px-5" style={{ height: '70px' }} >
                <a href="#" class="d-flex align-items-center gap-2 font-semibold text-decoration-none">
                  {/* <FontAwesomeIcon icon={faBell} style={{ marginRight: '10px' }} /> */}
                  <span class="home" >Admin Dashboard</span>
                </a>
                <button class="ms-auto btn btn-outline-secondary">
                  <FontAwesomeIcon icon="fa-regular fa-bell" />
                  <span class="visually-hidden">Toggle notifications</span>
                </button>
              </div>
              <div className="flex-grow-1 py-2">
                <Nav className="flex-column">
                  <Nav.Link className="rounded-lg bg-gray-100 px-3 py-2 text-dark nav-item" onClick={handleDashboardClick}>
                  <FontAwesomeIcon icon="fa-solid fa-user-tie"  color="7c817d" style={{ marginRight: '10px' }}  />
                    Atención de Turno
                  </Nav.Link>

                  <Nav.Link className="rounded-lg bg-gray-100 px-3 py-2 text-dark   nav-item" href="#" onClick={handleUsuariosClick}>
                    <FontAwesomeIcon icon={faUsers} color="7c817d" style={{ marginRight: '7px' }} />
                    Usuarios
                  </Nav.Link>

                  <Nav.Link onClick={() => setOpen(!open)} className="rounded-lg bg-gray-100 px-3 py-2 text-dark nav-item">
                    <FontAwesomeIcon icon={faCalendarDays} color="7c817d" style={{ marginLeft: '3px', marginRight: '11px' }} />
                    Turnos
                  </Nav.Link>
                  <Collapse in={open}>

                    <div id="collapseTurnos">

                      <Nav.Link className="rounded-lg bg-gray-100 px-3 py-2 text-dark nav-item" href="#" onClick={handleCrearClick}>
                        <FontAwesomeIcon icon={faCalendarPlus} color="7c817d" style={{ marginLeft: '3px', marginRight: '11px' }} />
                        Crear
                      </Nav.Link>

                      <Nav.Link className="rounded-lg bg-gray-100 px-3 py-2 text-dark nav-item" href="#" onClick={() => { setShouldUpdateTable(true); handleListaClick(); }}>
                        <FontAwesomeIcon icon="fa-solid fa-list" color="7c817d" style={{ marginLeft: '3px', marginRight: '11px' }} />
                        Lista
                      </Nav.Link>
                    </div>
                  </Collapse>
                </Nav>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <header class="d-flex align-items-center gap-4 border-bottom bg-gray-100 p-3">
              <a href="#" class="d-lg-none">
                <i class="bi bi-speedometer2"></i>
                <span class="visually-hidden">Home</span>
              </a>
              <div class="flex-grow-1">



              </div>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  <FontAwesomeIcon icon={["fas", "user-tie"]} style={{ marginRight: '10px' }} />
                 {/* colocarlo nombre del suario  */}
                 user
                </Dropdown.Toggle>

                <Dropdown.Menu align="right">
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-1">Configuración</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={handleLogout} >Cerrar Sesión</Dropdown.Item>
                  <Dropdown.Divider />

                </Dropdown.Menu>
              </Dropdown>
            </header>

            {mostrarTablaUsuarios ? ( // Muestra la tabla si mostrarTabla es true
              <main class="flex-grow-1 gap-4 p-4">

                <div class="d-flex justify-content-center">
                  <h1 class="font-weight-bold fs-5 text-center">Usuarios</h1>
                </div>


                <div class="border shadow-sm rounded">

                


                  <Table>
                  <thead className="table-info"> 
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Tipo documento</th>
                        <th scope="col">N documento</th>
                        {/* <th scope="col">Dirección</th> */}
                        <th scope="col">Correo</th>
                        <th scope="col">Celular</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{item.id}</th>
                          <td>{item.name}</td>
                          <td>{item.lastName}</td>
                          <td>{item.typeDocument}</td>
                          <td>{item.document}</td>
                          {/* <td>{item.addres}</td> */}
                          <td>{item.email}</td>
                          <td>{item.celphone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  {/* <table class="table"> */}

                  {/* </table> */}



                </div>
              </main>
            ) : mostrarCrearShift ? (
              // <CreateShift />
              <CreateShift onShowCreateShift={handleShowCreateShift} />
            ) : mostrarListaTurnos ? (
              <ListShift />
            ) : mostrarNuevoComponente ? (
              // <RegistryShit /> 
              <RegistryShit userId={selectedUser} />

            ) : (
              <Dashboard />
            )}
          </div>
        </div>
        <div class="fixed-bottom fixed-lg-end m-3">
          <button class="btn btn-outline-primary d-lg-none">
            <i class="bi bi-plus"></i>
            <span class="visually-hidden">Create Shift</span>
          </button>
          {/* Drawer content */}
        </div>
      </div>
    </div>

  );
}

export default AdministratorHomepage;