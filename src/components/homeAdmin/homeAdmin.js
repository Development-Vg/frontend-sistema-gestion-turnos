import React, { useEffect, useState } from 'react';
import './homeAdmin.css';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Collapse, Dropdown } from 'react-bootstrap';


library.add(fas, faCalendarDays);


function AdministratorHomepage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const backendUrl = process.env.REACT_APP_BCKEND;
      if (!backendUrl) {
        console.error('REACT_APP_BCKEND está indefinido');
        return;
      }

      try {
        const response = await axios.get(`${backendUrl}/users/listAll`);
        setData(response.data);
      } catch (error) {
        console.error('Error al cargar los datos', error);
      }
    };

    fetchData();
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div class="container-fluid" style={{ height: '100vh' }}>
        <div class="row h-100">
          <div class="col-lg-3 border-end bg-gray-100 p-0 menu">
            <div class="d-flex flex-column h-100 gap-2">
              <div class="d-flex align-items-center border-bottom px-5" style={{ height: '70px' }} >
                <a href="#" class="d-flex align-items-center gap-2 font-semibold text-decoration-none">
                  <FontAwesomeIcon icon="fa-solid fa-toolbox" />
                  <span class="home">Admin Dashboard</span>
                </a>
                <button class="ms-auto btn btn-outline-secondary">
                  <FontAwesomeIcon icon="fa-regular fa-bell" />
                  <span class="visually-hidden">Toggle notifications</span>
                </button>
              </div>
              <div className="flex-grow-1 py-2">
                <Nav className="flex-column">
                  <Nav.Link className="rounded-lg bg-gray-100 px-3 py-2 text-dark nav-item">
                    <FontAwesomeIcon icon="fa-solid fa-house-user" color="#02457a" style={{ marginRight: '8px' }} />
                    Dashboard
                  </Nav.Link>
                  <Nav.Link className="rounded-lg px-3 py-2 text-dark nav-item" href="#">
                    <FontAwesomeIcon icon={faUsers} color="#02457a" style={{ marginRight: '6px' }} />
                    Usuarios
                  </Nav.Link>
                  <Nav.Link onClick={() => setOpen(!open)} className="rounded-lg px-3 py-2 text-dark nav-item">
                    <FontAwesomeIcon icon={faCalendarDays} color="#02457a" style={{ marginRight: '11px' }} />
                    Turnos
                  </Nav.Link>
                  <Collapse in={open}>
                    <div id="collapseTurnos">
                      <Nav.Link className="rounded-lg px-3 py-2 text-dark nav-item" href="#">
                        <FontAwesomeIcon icon={['fas', 'calendar-plus']} color="#02457a" style={{ marginRight: '11px' }} />
                        Crear
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
                <form>
                  <div class="position-relative"style={{ maxWidth: '60%' }}>
                    <i class="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary"></i>
                    <input class="form-control bg-white shadow-none pl-5" placeholder="Buscar usuarios..." type="search" />
                  </div>
                </form>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  <FontAwesomeIcon icon="fa-solid fa-user-tie" style={{ marginRight: '10px' }} />
                  Anderson Daniel Barreto
                </Dropdown.Toggle>

                <Dropdown.Menu align="right">
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-1">Configuración</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Cerrar Sesión</Dropdown.Item>
                  <Dropdown.Divider />
                  
                </Dropdown.Menu>
              </Dropdown>
            </header>
            <main class="flex-grow-1 gap-4 p-4">
              <div class="d-flex justify-content-center">
                <h1 class="font-weight-bold fs-5 text-center">Usuarios</h1>
               
              </div>
              <div class="border shadow-sm rounded">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Tipo documento</th>
                      <th scope="col">N documento</th>
                      <th scope="col">Dirección</th>
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
                        <td>{item.addres}</td>
                        <td>{item.email}</td>
                        <td>{item.celphone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
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