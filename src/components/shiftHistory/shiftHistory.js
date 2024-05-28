import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { useKeycloak } from '../Keycloak/KeycloakContext';
import { toast } from 'sonner'





function ShiftHistory({ userId }) {

    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);
    const keycloak = useKeycloak();


    //  formatear la fecha
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    //  formatear la hora en formato de 24 horas
    const formatTime = (dateString) => {
        const options = { hour: '2-digit', minute: '2-digit', hour12: false };
        return new Date(dateString).toLocaleTimeString(undefined, options);
    };
    const backendUrl = process.env.REACT_APP_BCKEND;

    const fetchData = async () => {

        if (!backendUrl) {
            console.error('REACT_APP_BCKEND está indefinido');
            return;
        }
        try {
            const config = {
                headers: { Authorization: `Bearer ${keycloak.token}` }
            };
            const response = await axios.get(`${backendUrl}/turnosList/shiftByUserId/${userId}`, config);
            setData(response.data);
            console.log(" mi hisotial de turnos:", response.data)
        } catch (error) {
            console.error('Error al cargar los datos', error);
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${keycloak.token}` },
                params: { idTurn: itemId }
            };

            const r = await axios.patch(`${backendUrl}/turnos/updateStatus/${userId}`, {}, config);
            toast.success("turno cancelada"/*r.data */);
            fetchData(); 
        } catch (error) {
            console.error('Error al cancelar el turno', error);
            toast.error("error al cancelar turno");
        }
    };


    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950" style={{ marginTop: '20px' }}>
            <div className="max-w-6xl w-full space-y-6 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">

                <dIv className="d-flex align-items-center m-2">
                    <FontAwesomeIcon icon="fa fa-history" size="2x" className="me-4 " />  <h3> Mis Turnos</h3>
                </dIv>

                <div>
                    <Row>
                        <Col xs={7}></Col>

                        <Col xs={5}>
                            <div >
                                <form>
                                    <i class="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary"></i>
                                    <input class="form-control bg-white shadow-none pl-5"
                                        placeholder="Buscar Turno  por id turno, dependencia"
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
                    <header class="d-flex align-items-center justify-content-center gap-4 border-bottom bg-gray-100 p-3" >

                    </header>

                    <div class="border shadow-sm rounded">

                        <Table>
                            <thead className="table-info">
                                <tr>
                                    <th scope="col">Id turno</th>
                                    <th scope="col">Dependencia</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.filter(item => {
                                    const matchesSearch = item.id.toString().includes(searchValue) ||
                                        item.dependence.toLowerCase().includes(searchValue.toLowerCase());
                                    const hasValidStatus = item.status === 'ACTIVE' || item.status === 'REALIZADO'; //INACTIVE
                                    return matchesSearch && hasValidStatus;
                                }).map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.dependence}</td>
                                        <td>{formatDate(item.date)}</td>
                                        <td>{formatTime(item.date)}</td>
                                        <td>
                                            {item.status === 'ACTIVE' && (
                                                <Button
                                                    variant="outline-danger"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="mb-2 mt-2"
                                                >
                                                    Cancelar
                                                </Button>
                                            )}
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

export default ShiftHistory;