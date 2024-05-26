import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';





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


                <dIv className="d-flex align-items-center m-2">
                    <FontAwesomeIcon icon="fa-solid fa-list" size="2x" className="me-4 " />  <h3> Lista de Turnos</h3>
                </dIv>

                <div className="mb-4">
                    <Row>
                        <Col xs={7}></Col>
                        <Col xs={5}>
                            <div >
                                <form>
                                    <i class="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary"></i>
                                    <input class="form-control bg-white shadow-none pl-5"
                                        placeholder="Buscar Turno por id turno, id usuario ,dependencia"
                                        type="search"
                                        value={searchValue}
                                        onChange={e => setSearchValue(e.target.value)}
                                    />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="space-y-4">
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
                                {data.filter(item => {
                                    return item.id.toString().includes(searchValue) ||
                                        item.userId.toString().includes(searchValue) ||
                                        item.dependence.toLowerCase().includes(searchValue.toLowerCase());
                                }).map((item, index) => (
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