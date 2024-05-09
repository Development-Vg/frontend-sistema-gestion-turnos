


import './registry.css';
import Form from 'react-bootstrap/Form';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function ModalRegister({ show, handleClose }) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registro Usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <Row>
                            {/* nombre */}
                            <div className="group col-6 mb-4">
                                <Form.Group controlId="nombre">
                                    <Form.Control type="text" placeholder=" " className="ctom-imput" />
                                    <Form.Label>Nombre</Form.Label>
                                </Form.Group>
                            </div>

                            <Col xs={6} className='group mb-4'>
                                <Form.Group controlId="apellido">
                                    <Form.Control type="text" placeholder=" " className="ctom-imput" />
                                    <Form.Label>Apellido</Form.Label>
                                </Form.Group>
                            </Col>

                            <Col xs={12} className="group mb-4">
                                <Form.Select id="tipo_documento" className="ctom-imput">
                                    <option value="">Seleccionar</option>
                                    <option value="CC">Cédula de Ciudadanía</option>
                                    <option value="CE">Cédula de Extranjería</option>
                                </Form.Select>
                                <Form.Label>Tipo de Documento</Form.Label>
                            </Col>


                            <Col xs={12} className='group mb-4'>
                                <Form.Group controlId="numero_documento">
                                    <Form.Control type="text" placeholder="" className="ctom-imput" required autoComplete="off" />
                                    <Form.Label>Numero de Documento</Form.Label>
                                </Form.Group>

                            </Col>

                            <Col xs={12} className='group mb-4'>
                                <Form.Group controlId="numero_celular">
                                    <Form.Control type="text" placeholder="" className="ctom-imput" required autoComplete="off" />
                                    <Form.Label>Numero de celular</Form.Label>
                                </Form.Group>
                            </Col>


                            <Col xs={12} className='group mb-4'>
                                <Form.Group controlId="correo_electronico">
                                    <Form.Control type="email" placeholder="" className="ctom-imput" required />
                                    <Form.Label>Correo electronico</Form.Label>
                                </Form.Group>
                            </Col>

                            <Col xs={12} className='group mb-4'>
                                <Form.Group controlId="Direccion">
                                    <Form.Control type="text" placeholder="" />
                                    <Form.Label>Direccion de localdiad</Form.Label>
                                </Form.Group>
                            </Col>

                            <Col xs={6} className='group mb-4'>
                                <Form.Group controlId="password">
                                    <Form.Control type="password" placeholder="" className="ctom-imput" required autoComplete="off" />
                                    <Form.Label>Contraseña</Form.Label>
                                </Form.Group>
                            </Col>

                            <Col xs={6} className='group mb-4'>
                                <Form.Group controlId="vali_password">
                                    <Form.Control type="password" placeholder="" className="ctom-imput" required />
                                    <Form.Label>Validación contraseña</Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">cancelar</Button>
                    <Button variant="primary">Registrars</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}





export default ModalRegister;