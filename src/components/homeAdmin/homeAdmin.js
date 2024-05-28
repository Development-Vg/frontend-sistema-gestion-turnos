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
import { Table, Col, Row } from 'react-bootstrap';

library.add(fas);


function AdministratorHomepage() {

  const keycloak = useKeycloak();

  const handleLogout = async () => {
    if (keycloak) {
      await keycloak.logout({ redirectUri: 'http://localhost:3000/' });
      // Aquí puedes actualizar el estado de la autenticación en tu aplicación si es necesario
      console.log("token homeadmin: ", keycloak.token)
    }
  };



  const [data, setData] = useState([]);
  const [username, setUsername] = useState('Usuario');
  const [searchValue, setSearchValue] = useState('');



  useEffect(() => {
    const fetchData = async () => {
      const backendUrl = process.env.REACT_APP_BCKEND;
      if (!backendUrl) {
        console.error('REACT_APP_BCKEND está indefinido');
        return;
      }

      try {

        const config = {
          headers: { Authorization: `Bearer ${keycloak.token}` }
        };
        const response = await axios.get(`${backendUrl}/listUsers/listAll`, config);
        setData(response.data);
      } catch (error) {
        console.error('Error al cargar los datos', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    if (keycloak && keycloak.tokenParsed) {
      const usernameFromToken = keycloak.tokenParsed.preferred_username || 'Usuario';
      setUsername(usernameFromToken);
    }
  }, [keycloak]);





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
                  <span class="home" onClick={handleDashboardClick} >Admin Dashboard </span>
                </a>

                <button class="ms-auto btn btn-outline-secondary">
                  <FontAwesomeIcon icon="fa-regular fa-bell" />
                  <span class="visually-hidden">Toggle notifications</span>
                </button>
              </div>
              <div className="flex-grow-1 py-2">
                <Nav className="flex-column">
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
                  {username}
                </Dropdown.Toggle>

                <Dropdown.Menu align="right">
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-1">Configuración</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={handleLogout} >Cerrar Sesión</Dropdown.Item>
                  <Dropdown.Divider />

                </Dropdown.Menu>
              </Dropdown>
            </header>

            {mostrarTablaUsuarios ? (
              <main class="flex-grow-1 gap-4 p-4">

                <dIv className="d-flex align-items-center m-2">
                  <FontAwesomeIcon icon="fa-solid fa-users" size="2x" className="me-4 " />  <h3> Usuarios</h3>
                </dIv>


                <div className="mb-4">
                  <Row>
                    <Col xs={7}></Col>

                    <Col xs={5}>
                      <div className=" m-2">
                        <form>
                          <i class="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary"></i>
                          <input class="form-control bg-white shadow-none pl-5"
                            placeholder="Buscar usuarios por nombre, apellido, N documento"
                            type="search"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                          />
                        </form>
                      </div>
                    </Col>
                  </Row>

                </div>

                <div class="border shadow-sm rounded">

                  <Table>
                    <thead className="table-info">
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Tipo documento</th>
                        <th scope="col">N documento</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Celular</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.filter(item => {
                        return item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                          item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
                          item.document.toString().includes(searchValue);
                      }).map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.lastName}</td>
                          <td>{item.typeDocument}</td>
                          <td>{item.document}</td>
                          <td>{item.email}</td>
                          <td>{item.celphone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>


                </div>
              </main>
            ) : mostrarCrearShift ? (
              <CreateShift onShowCreateShift={handleShowCreateShift} />
            ) : mostrarListaTurnos ? (
              <ListShift />
            ) : mostrarNuevoComponente ? (
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
        </div>
      </div>
    </div>

  );
}

export default AdministratorHomepage;