import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListShift() {

    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const backendUrl = process.env.REACT_APP_BCKEND_SHIFT_COMAND;
            if (!backendUrl) {
                console.error('REACT_APP_BCKEND está indefinido');
                return;
            }

            try {
                const response = await axios.get(`${backendUrl}/turnos/listAll`);
                setData(response.data);
            } catch (error) {
                console.error('Error al cargar los datos', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950" style={{ marginTop: '20px' }}>
            <div className="max-w-6xl w-full space-y-6 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="space-y-2">
                    <h1 class="font-weight-bold fs-5 text-center titlle">Tabla de Turnos</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-center">Turnos creados, eliminadoc ....</p>
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
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="border rounded-lg overflow-auto inline-block" style={{ marginTop: '20px' }}>
                            <table class="table" style={{ width: '620px' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Id turno</th>
                                        <th scope="col">Id usuario</th>
                                        <th scope="col">Dependencia</th>
                                        <th scope="col">fecha</th>
                                        <th scope="col">fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.userId}</td>
                                            <td>{item.dependence}</td>
                                            <td>{item.date}</td>
                                            <td>{item.shiftNumber}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListShift;