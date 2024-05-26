import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';





function ListShift() {



    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);


    // Función para formatear la fecha
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Función para formatear la hora en formato de 24 horas
    const formatTime = (dateString) => {
        const options = { hour: '2-digit', minute: '2-digit', hour12: false };
        return new Date(dateString).toLocaleTimeString(undefined, options);
    };

    const fetchData = async () => {
        const backendUrl = process.env.REACT_APP_BCKEND;
        if (!backendUrl) {
            console.error('REACT_APP_BCKEND está indefinido');
            return;
        }

        try {
            const response = await axios.get(`${backendUrl}/turnosList/listAll`);
            setData(response.data);
            console.log("lista de turnos:", response.data)


            console.log("respuetsa tabla de turnos :", response);
        } catch (error) {
            console.error('Error al cargar los datos', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950" style={{ marginTop: '20px' }}>
            <div className="max-w-6xl w-full space-y-6 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="space-y-2">
                    <h1 class="font-weight-bold fs-5 text-center titlle"   >Tabla de Turnos</h1>
                </div>
                <div className="space-y-4">
                    <header class="d-flex align-items-center justify-content-center gap-4 border-bottom bg-gray-100 p-3" >
                        <div class="flex-grow-1 " style={{ maxWidth: '50%' }}>
                            <form>
                                <div class="position-relative" style={{ maxWidth: '100%' }}>
                                    <i class="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary"></i>
                                    <input class="form-control bg-white shadow-none pl-5"
                                        placeholder="Buscar usuarios por nombre, apellido, N docuemto"
                                        type="search"
                                        value={searchValue}
                                        onChange={e => setSearchValue(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                <FontAwesomeIcon icon={faFilter} style={{ marginRight: '10px' }} />
                                Filtros
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="right">
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-1">Configuración</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"  >Cerrar Sesión</Dropdown.Item>
                                <Dropdown.Divider />

                            </Dropdown.Menu>
                        </Dropdown>

                    </header>

                    <div class="border shadow-sm rounded">

                        <Table>
                            <thead className="table-info">
                                <tr>
                                    <th scope="col">Id turno</th>
                                    <th scope="col">Id usuario</th>
                                    <th scope="col">Dependencia</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.userId}</td>
                                        <td>{item.dependence}</td>
                                        <td>{formatDate(item.date)}</td>
                                        <td>{formatTime(item.date)}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ListShift;