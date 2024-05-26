import React from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function AvailableDatesTable({ dates, dependence, onCreateShift }) {

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

    return (
        <div class="border shadow-sm rounded">
            <Table striped bordered hover >
                <thead className="table-info">

                    <tr>
                        <th>Acción</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Dependencia</th>
                    </tr>
                </thead>
                <tbody>
                    {dates.map((date, index) => (
                        <tr key={index} >
                            <td><Button variant="outline-warning" onClick={() => onCreateShift(date)}>Crear Turno</Button></td>
                            <td>{formatDate(date)}</td>
                            <td>{formatTime(date)}</td>
                            <td>{dependence}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default AvailableDatesTable;
