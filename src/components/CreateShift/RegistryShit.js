import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AvailableDatesTable from './AvailableDatesTable';

function RegistryShift({ userId }) {
    const [availableDates, setAvailableDates] = useState([]);
    const [selectedUser, setSelectedUser] = useState(userId); // Usuario por defecto
    const [selectedDependence, setSelectedDependence] = useState(''); // Dependencia por defecto vacía
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        if (selectedDependence && selectedDate) {
            fetchAvailableDates(selectedDependence, selectedDate);
        }
    }, [selectedDependence, selectedDate]);

    const fetchAvailableDates = (dependence, date) => {
        if (!dependence || !date) return;
        const simulatedData = [
            "Mon May 20 2024 08:00:00 GMT-0500",
            "Mon May 20 2024 08:30:00 GMT-0500",
            "Mon May 20 2024 09:00:00 GMT-0500",
            "Mon May 20 2024 09:30:00 GMT-0500",
            "Mon May 20 2024 10:00:00 GMT-0500",
            "Mon May 20 2024 10:30:00 GMT-0500",
            "Mon May 20 2024 11:00:00 GMT-0500",
            "Mon May 20 2024 11:30:00 GMT-0500",
            "Mon May 20 2024 12:00:00 GMT-0500",
            "Mon May 20 2024 12:30:00 GMT-0500",
            "Mon May 20 2024 13:00:00 GMT-0500",
            "Mon May 20 2024 13:30:00 GMT-0500",
            "Mon May 20 2024 14:00:00 GMT-0500",
            "Mon May 20 2024 14:30:00 GMT-0500",
            "Mon May 20 2024 15:00:00 GMT-0500",
            "Mon May 20 2024 15:30:00 GMT-0500",
            "Mon May 20 2024 16:00:00 GMT-0500",
            "Mon May 20 2024 16:30:00 GMT-0500",
            "Mon May 20 2024 17:00:00 GMT-0500"
        ];
        setAvailableDates(simulatedData);


        //se llama al bakec para traer  la lista 
        // Ejemplo:
        // axios.get(`${backendUrl}/availableDates`, { params: { dependence, date } })
        //     .then(response => {
        //         setAvailableDates(response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error al obtener fechas disponibles', error);
        //     });
    };

    const handleDependenceSelect = (dependence) => {
        setSelectedDependence(dependence);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    


    async function handleConfirmShiftClick(date) {
        if (!selectedUser || !selectedDependence || !date) {
            alert('Por favor selecciona una dependencia y fecha');
            return;
        }

        console.log ("fecha es:, ",date)
        const backendUrl = process.env.REACT_APP_BCKEND;
        const data = {
            userId: parseInt(selectedUser, 10),
            dependence: selectedDependence,
            date: date
        };

        try {
            const response = await axios.post(`${backendUrl}/turnos/create`, data);
            alert('Turno creado exitosamente');
        } catch (error) {
            console.error(error);
            alert('Error al crear el turno');
        }
    }

    return (
        <Container>
            <Row>
                <Col xs={6}>
                    <div className="mb-3 justify-content-center">
                        <label htmlFor="date" className="form-label">Seleccionar Fecha</label><br />
                        <DatePicker id="date" selected={selectedDate} onChange={handleDateChange} className="form-control" />
                    </div>
                </Col>
                <Col xs={6}>
                    <div>
                        <div className="mb-3 justify-content-center">
                            <label htmlFor="clerk" className="form-label">Dependencia</label>
                            <select id="clerk" className="form-select" onChange={(e) => handleDependenceSelect(e.target.value)} value={selectedDependence}>
                                <option value="">Seleccionar Dependencia</option>
                                <option value="Atención al Cliente">Atención al Cliente</option>
                                <option value="Caja">Caja</option>
                                <option value="Créditos y Préstamos">Créditos y Préstamos</option>
                                <option value="Asesoría Financiera">Asesoría Financiera</option>
                            </select>
                        </div>
                    </div>
                </Col>
                <Col xs={12}>
                    <div><h1>Tabla</h1></div>
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
