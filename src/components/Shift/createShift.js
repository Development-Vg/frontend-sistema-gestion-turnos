import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './Shift.css';

function CreateShift({ onShowCreateShift }) {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    // Carga usuarios
    useEffect(() => {
        const fetchData = async () => {
            const backendUrl = process.env.REACT_APP_BCKEND;
            if (!backendUrl) {
                console.error('REACT_APP_BCKEND está indefinido');
                return;
            }

            try {
                const response = await axios.get(`${backendUrl}/list/listAll`);
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
                    <h1 className="font-weight-bold fs-5 text-center titlle">Crear Turno</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-center">Buscar y selecciona Usuario.</p>
                </div>
                <div className="space-y-4">
                    <header className="d-flex align-items-center justify-content-center gap-4 border-bottom bg-gray-100 p-3">
                        <div className="flex-grow-1" style={{ maxWidth: '50%' }}>
                            <form>
                                <div className="position-relative" style={{ maxWidth: '100%' }}>
                                    <i className="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary"></i>
                                    <input className="form-control bg-white shadow-none pl-5"
                                        placeholder="Buscar usuarios por nombre, apellido, N documento"
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
                                <Dropdown.Item href="#/action-3">Cerrar Sesión</Dropdown.Item>
                                <Dropdown.Divider />
                            </Dropdown.Menu>
                        </Dropdown>
                    </header>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="border rounded-lg overflow-auto inline-block" style={{ marginTop: '20px' }}>
                            <table className="table" style={{ width: '620px' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">N documento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.filter(item => {
                                        return item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                                            item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
                                            item.document.toString().toLowerCase().includes(searchValue.toLowerCase());
                                    }).map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.document}</td>
                                            <td>
                                                <button className="myButton" onClick={() => onShowCreateShift(item.id)}>
                                                    Crear Turno
                                                </button>
                                            </td>
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

export default CreateShift;
