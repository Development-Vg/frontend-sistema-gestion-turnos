import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from './logo.png';


function Dashboard() {
    return (
        <Container className="d-flex flex-column align-items-center" >
    <Row className="justify-content-center align-items-center" >
        <Col xs="auto" className="d-flex justify-content-center align-items-center">
            <Image src={logo} fluid className="mr-3" style={{width: "80%", height: "auto"}}   />
        </Col>
    </Row>
    <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
            <p className="" style={{ color: "#2c4254", fontSize: "24px",fontWeight: "bold" ,textAlign: "center"}}>¡Bienvenido a la Plataforma de Solicitud de Turnos de la Clínica SDGT!</p>
            <p className="text-justify">¡ Nos complace darle la bienvenida a nuestra plataforma diseñada para facilitar la gestión de sus citas médicas !</p>
        </Col>
    </Row>
</Container>
    );
}

export default Dashboard;
