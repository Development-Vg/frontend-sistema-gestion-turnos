import React, { useState } from "react";
import "./Homec.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ModalRegister from '../../registry/registry';




export const Homec = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
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
                            <button className="primary-btn m-2" onClick={() => navigate('/login')}>solicitar turno</button>
                            <button className="primary-btn" onClick={handleShowModal}>registrarse</button>
                            <ModalRegister show={showModal} handleClose={handleCloseModal} />
                        </div>
                    </div>
                </div>

            </section>
            <div className="margin"> </div>
        </>
    )
}
export default Homec