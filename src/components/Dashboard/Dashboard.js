import React from "react";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
    return (

        <Container>
            <Row>
            <Col xs={12}>
                va la imagen lofgo.jpg
            </Col>
                <Col xs={6}>
                    
                    <p>¡Bienvenido a la Plataforma de Solicitud de Turnos de la Clínica SDGT!</p>
                    <p>Nos complace darle la bienvenida a nuestra plataforma diseñada para facilitar la gestión de sus citas médicas.
                        Aquí podrá:</p>
                </Col>
            </Row>


        </Container>

        /*
        <main className="container my-4 ">
            <div className="d-flex justify-content-center align-items-center mb-4">
                <h1 className="h3">Atención de turno</h1>
            </div>
            <Card className="p-4">
                <div className="row mb-4">
                    <div className="col">
                        <div className="text-muted">Procedimiento</div>
                        <div>Loan Application</div>
                    </div>
                    <div className="col">
                        <div className="text-muted">turno #</div>
                        <div>12345</div>
                    </div>
                    <div className="col">
                        <div className="text-muted">Estado</div>
                        <div className="text-success">Activo</div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="text-muted">Tiempo de servicio</div>
                        <div>45 min</div>
                    </div>
                    <div className="col">
                        <div className="text-muted">Turnos de espera</div>
                        <div>12</div>
                    </div>
                    <div className="col">
                        <div className="text-muted">Tiempo de espera</div>
                        <div>1 hr 15 min</div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="text-muted">Turnos atendidos</div>
                        <div>120</div>
                    </div>
                    <div className="col">
                        <div className="text-muted">Tiempo promedio</div>
                        <div>30 min</div>
                    </div>
                    <div className="col">
                        <div className="text-muted">Turnos cancelados</div>
                        <div className="text-danger">15</div>
                    </div>
                </div>
                <div className="d-flex flex-column gap-2">
                    <Button className="btn btn-primary d-flex justify-content-between align-items-center">
                        Siguiente
                        <ArrowRightIcon className="ms-2" />
                    </Button>
                    <Button className="btn btn-warning text-white d-flex justify-content-between align-items-center">
                        Finalizar
                        <CircleCheckIcon className="ms-2" />
                    </Button>
                    <Button className="btn btn-secondary text-white d-flex justify-content-between align-items-center">
                        <PhoneIcon className="me-2" />
                        llamar
                    </Button>
                    <Button className="btn btn-danger text-white d-flex justify-content-between align-items-center">
                        <TrashIcon className="me-2" />
                        Cancelar
                    </Button>
                    <Button className="btn btn-success text-white d-flex justify-content-between align-items-center">
                        <CheckIcon className="me-2" />
                        Atender
                    </Button>
                </div>
            </Card>
        </main>*/
    );
}

// Example icons
function FilterIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16" {...props}>
            <path d="M6 10.5v4a.5.5 0 0 0 .8.4l2-1.5a.5.5 0 0 0 .2-.4v-4l3.9-5.2A.5.5 0 0 0 12.5 3h-9a.5.5 0 0 0-.4.8L6 10.5zm-4.4-.8l3.8 5.2a1.5 1.5 0 0 0 2.4 0l3.8-5.2a1.5 1.5 0 0 0-.4-2.2V1.5A1.5 1.5 0 0 0 10 0H6A1.5 1.5 0 0 0 4.5 1.5v6a1.5 1.5 0 0 0-.4 2.2z" />
        </svg>
    );
}

function SettingsIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16" {...props}>
            <path d="M9.607 0h-1.214C8.178 0 8 .178 8 .393v.456a5.625 5.625 0 0 0-2.015 1.009L5.405 1.45a.416.416 0 0 0-.577.057l-.847.847a.416.416 0 0 0-.057.577l.422.588A5.625 5.625 0 0 0 3 8a5.625 5.625 0 0 0 .999 2.015l-.422.588a.416.416 0 0 0 .057.577l.847.847a.416.416 0 0 0 .577-.057l.587-.422A5.625 5.625 0 0 0 8 12.5a5.625 5.625 0 0 0 2.015-.999l.587.422a.416.416 0 0 0 .577-.057l.847-.847a.416.416 0 0 0-.057-.577l-.422-.588A5.625 5.625 0 0 0 12.5 8a5.625 5.625 0 0 0-.999-2.015l.422-.588a.416.416 0 0 0-.057-.577l-.847-.847a.416.416 0 0 0-.577.057l-.588.422A5.625 5.625 0 0 0 8 3V2.393C8 2.178 7.822 2 7.607 2h-1.214C7.822 2 8 1.822 8 1.607V.393C8 .178 8.178 0 8.393 0h1.214C7.822 0 8 .178 8 .393v.456a5.625 5.625 0 0 0-2.015 1.009L5.405 1.45a.416.416 0 0 0-.577.057l-.847.847a.416.416 0 0 0-.057.577l.422.588A5.625 5.625 0 0 0 3 8a5.625 5.625 0 0 0 .999 2.015l-.422.588a.416.416 0 0 0 .057.577l.847.847a.416.416 0 0 0 .577-.057l.587-.422A5.625 5.625 0 0 0 8 12.5a5.625 5.625 0 0 0 2.015-.999l.587.422a.416.416 0 0 0 .577-.057l.847-.847a.416.416 0 0 0-.057-.577l-.422-.588A5.625 5.625 0 0 0 12.5 8a5.625 5.625 0 0 0-.999-2.015l.422-.588a.416.416 0 0 0-.057-.577l-.847-.847a.416.416 0 0 0-.577.057l-.588.422A5.625 5.625 0 0 0 8 3V2.393C8 2.178 7.822 2 7.607 2h-1.214zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
    );
}

function ArrowRightIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16" {...props}>
            <path fillRule="evenodd" d="M6 15l7-7-7-7-.707.707L11.586 8 5.293 14.293 6 15z" />
        </svg>
    );
}

function CircleCheckIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16" {...props}>
            <path d="M2.5 8A5.5 5.5 0 1 1 8 13.5 5.5 5.5 0 0 1 2.5 8zm1 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0zm6.646-2.854a.5.5 0 0 1 .708.708L7.707 9.207 5.854 7.354a.5.5 0 1 1 .708-.708l1.146 1.147 2.5-2.5z" />
        </svg>
    );
}

function PhoneIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16" {...props}>
            <path d="M3.654 1.328a.678.678 0 0 1 1.018-.141l2.605 2.604a.678.678 0 0 1-.58 1.138l-1.065.017c-.092.001-.197.025-.319.068-.073.027-.151.062-.231.106a3.198 3.198 0 0 0-.262.142l-.237.153a.678.678 0 0 1-.678 0l-.153-.237a3.198 3.198 0 0 0-.142-.262 1.007 1.007 0 0 1-.106-.231c-.043-.122-.067-.227-.068-.319l-.017-1.065a.678.678 0 0 1 1.138-.58l2.604 2.604a.678.678 0 0 1-.141 1.018L5.322 9.74a13.034 13.034 0 0 0 1.482 1.482l1.013-1.013a.678.678 0 0 1 .58-1.138l1.065.017c.092.001.197.025.319.068.073.027.151.062.231.106a3.198 3.198 0 0 0 .262.142l.237.153a.678.678 0 0 1 0 .678l-.153.237a3.198 3.198 0 0 0-.142.262 1.007 1.007 0 0 1-.106.231c-.043.122-.067.227-.068.319l-.017 1.065a.678.678 0 0 1-1.138.58l-2.604-2.604a.678.678 0 0 1-.141-1.018l1.013-1.013A13.034 13.034 0 0 0 6.26 9.74L4.776 8.256a.678.678 0 0 1 .141-1.018l2.605-2.605a.678.678 0 0 1 1.018.141l.087.13a.678.678 0 0 1-.58 1.138l-1.065-.017a.678.678 0 0 1-.58-1.138l.87-.87a.678.678 0 0 1 1.018.141l2.605 2.605a.678.678 0 0 1-1.018 1.018l-2.605-2.605a.678.678 0 0 1 .141-1.018L8.256 1.146a.678.678 0 0 1 1.018 1.018L6.67 5.465a.678.678 0 0 1-.141-1.018L9.134 1.854a.678.678 0 0 1 1.018-.141l.087.13z" />
        </svg>
    );
}

function TrashIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" {...props}>
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm4 0A.5.5 0 0 1 10 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-7-1a.5.5 0 0 1 .5-.5h1.5A.5.5 0 0 1 5 4h6a.5.5 0 0 1 .5.5h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-1zM14 3h-3v-1A1 1 0 0 0 10 1H6a1 1 0 0 0-1 1v1H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6 2h4v1H6V2z" />
        </svg>
    );
}

function CheckIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16" {...props}>
            <path d="M10.97 4.97a.75.75 0 0 1 1.06 1.06l-4.992 4.993a.75.75 0 0 1-1.06 0l-2.496-2.497a.75.75 0 1 1 1.06-1.06l1.965 1.964 4.469-4.47z" />
        </svg>
    );
}

export default Dashboard;