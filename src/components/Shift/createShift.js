import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
// import './Shift.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Row, Col } from 'react-bootstrap';


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
                const response = await axios.get(`${backendUrl}/listUsers/listAll`);
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


                <dIv className="d-flex align-items-center m-2">
                    <FontAwesomeIcon icon="fa fa-calendar-plus" size="2x" className="me-4 " />  <h3> Crear Turno</h3>
                </dIv>

                <div className="space-y-4">
                    <Row>
                        <Col xs={8} className=' mt-3 mb-4'></Col>
                        <Col xs={4} className=' mt-3 mb-4'>
                            <form>
                                <div className="position-relative" style={{ maxWidth: '100%' }}>
                                    <i className="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary"></i>
                                    <input className="form-control bg-white shadow-none pl-5"
                                        placeholder="Buscar por nombre, apellido, N documento"
                                        type="search"
                                        value={searchValue}
                                        onChange={e => setSearchValue(e.target.value)}
                                    />
                                </div>
                            </form>
                        </Col>


                    </Row>


                    <div class="border shadow-sm rounded">

                        <Table>
                            <thead className="table-info">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">N documento</th>
                                    <th scope="col">Solicitar</th>
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
                                            < Button variant="outline-warning" onClick={() => onShowCreateShift(item.id)}>
                                                Crear Turno
                                            </ Button>
                                        </td>
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

export default CreateShift;
