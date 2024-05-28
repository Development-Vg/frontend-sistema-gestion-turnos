import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AvailableDatesTable from './AvailableDatesTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useKeycloak } from '../Keycloak/KeycloakContext';

function RegistryShift({userId}) {
    const [availableDates, setAvailableDates] = useState([]);
    const [selectedUser, setSelectedUser] = useState(userId); // Usuario por defecto
    const [selectedDependence, setSelectedDependence] = useState(''); // Dependencia por defecto vacía
    const [selectedDate, setSelectedDate] = useState(null);
    const keycloak = useKeycloak();

    useEffect(() => {
        if (selectedDependence && selectedDate) {
            fetchAvailableDates(selectedDependence, selectedDate);
        }
    }, [selectedDependence, selectedDate]);

    const fetchAvailableDates = async (dependence, date) => {
        if (!dependence || !date) return;


        const formattedDate = date.toString().split('(')[0].trim();


        const backendUrl = process.env.REACT_APP_BCKEND;
        if (!backendUrl) {
            console.error('REACT_APP_BCKEND está indefinido');
            return;
        }

        console.log("la dependencia es:", dependence, " la fecha que envio: ", formattedDate)

        try {
            const config = {
                headers: { Authorization: `Bearer ${keycloak.token}` },
                params: { userId, dependence, date: formattedDate }
            };
            console.log("Parámetros de envío para traer lista de fechas :", config.params);

            const response = await axios.get(`${backendUrl}/turnosList/listAvailableShifts`, config);
            setAvailableDates(response.data);
        } catch (error) {
            console.error('Error al obtener fechas disponibles', error);
        }


    };

    const handleDependenceSelect = (dependence) => {
        setSelectedDependence(dependence);

        if (dependence === '') {
            setAvailableDates([]);
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    async function handleConfirmShiftClick(date) {
        if (!selectedUser || !selectedDependence || !date) {
            alert('Por favor selecciona una dependencia y fecha');
            return;
        }

        console.log("fecha es:, ", date)
        const backendUrl = process.env.REACT_APP_BCKEND;
        const data = {
            userId: parseInt(selectedUser, 10),
            dependence: selectedDependence,
            date: date
        };

        try {
            const config = {
                headers: { Authorization: `Bearer ${keycloak.token}` }
            };
            console.log("datos enviados para crear turno : ", data)
            const response = await axios.post(`${backendUrl}/turnos/create`, data,config);
            alert('Turno creado exitosamente');
        } catch (error) {
            console.error(error);
            alert('Error al crear el turno');
        }
    }

    // fecha actual
    const today = new Date();

    // Calcula el primer día del mes siguiente
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    // Calcula el último día del mes siguiente
    const lastDayOfNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);


    return (
        <Container>
            <Row>
            <Col xs={12} className=" mt-4 mb-4">
            <dIv className="d-flex align-items-center">
            <FontAwesomeIcon icon="fa-solid fa-calendar-plus"   size="2x" className="me-4"/>  <h3> Solicitud de Turnos</h3>
            </dIv>   
            </Col>
                
                <Col xs={6}>
                    <div className="mb-3 justify-content-center">
                        <label htmlFor="date" className="form-label">Seleccionar Fecha</label><br />
                        <DatePicker id="date" selected={selectedDate} onChange={handleDateChange}   autoComplete="off" className="form-control" minDate={today} maxDate={lastDayOfNextMonth} />
                    </div>
                </Col>
                <Col xs={6}>
                    <div>
                        <div className="mb-3 justify-content-center">
                            <label htmlFor="clerk" className="form-label">Dependencia</label>
                            <select id="clerk" className="form-select" onChange={(e) => handleDependenceSelect(e.target.value)} value={selectedDependence}>
                                <option value="">Seleccionar Dependencia</option>
                                <option value="Cita Médica">Cita Médica</option>
                                <option value="Cita Odontológica">Cita Odontológica</option>
                                <option value="Consulta Psicológica">Consulta Psicológica</option>
                                <option value="Consulta en Enfermería">Consulta en Enfermería</option>
                            </select>
                        </div>
                    </div>
                </Col>
                <Col xs={12}>
                    <AvailableDatesTable
                        dates={availableDates}
                        dependence={selectedDependence}
                        onCreateShift={handleConfirmShiftClick}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default RegistryShift;
