import React from "react";
import "./Homec.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';

export const Homec = () => {
    return (
        <>
            <section className="homec">
                <div className="container">
                    <div className="row">

                        <div>
                            <Row>
                            <Col xs={6}>
                                    <h1>¡Bienvenido a la Plataforma de Solicitud de Turnos de la Clínica SDGT!</h1>
                                    <p>Nos complace darle la bienvenida a nuestra plataforma diseñada para facilitar la gestión de sus citas médicas.
                                        Aquí podrá:</p>
                                </Col>
                                
                            </Row>

                        </div>


                        <ul className="option">
                            <li><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{ marginRight: '12px' }} />Consultar la disponibilidad de turnos</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-stethoscope" style={{ marginRight: '10px' }} />Solicitar turnos para consultas médicas</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-clipboard" style={{ marginRight: '15px' }} />Consultar el historial de sus turnos</li>
                        </ul>
                        <div className="button">

                            <button className="primary-btn m-2">solicitar turno</button>
                            <button className="primary-btn">registrarse</button>
                        </div>
                    </div>
                </div>

            </section>
            <div className="margin"> </div>
        </>
    )
}
export default Homec