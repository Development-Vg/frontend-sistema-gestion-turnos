import React, { useState } from 'react';
import './registry.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';




function ModalRegister({ show, handleClose }) {

    const backendUrl = process.env.REACT_APP_BCKEND;

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        typeDocument: '',
        document: '',
        addres: '',
        email: '',
        celphone: '',
        typeUser: 'U',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async () => {

        console.log("envio: ", formData);
        try {
            const r = await axios.post(`${backendUrl}/users/create`, formData);
            alert(r.data)

        } catch (error) {
            alert('Error al registrar usuario:',error);
        }
    };




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
                                <Form.Group controlId="name">
                                    <Form.Control type="text" placeholder=" " className="ctom-imput" onChange={handleChange} />
                                    <Form.Label>Nombre</Form.Label>
                                </Form.Group>
                            </div>

                        

                            <Col xs={6} className='group mb-4'>
                                <Form.Group controlId="lastName">
                                    <Form.Control type="text" placeholder=" " className="ctom-imput" onChange={handleChange}/>
                                    <Form.Label>Apellido</Form.Label>
                                </Form.Group>
                            </Col>

                            <Col xs={12} className="group mb-4">
                                <Form.Select id="typeDocument" className="ctom-imput" onChange={handleChange}>
                                    <option value="">Seleccionar</option>
                                    <option value="CC">Cédula de Ciudadanía</option>
                                    <option value="CE">Cédula de Extranjería</option>
                                </Form.Select>
                                <Form.Label>Tipo de Documento</Form.Label>
                            </Col>


                            <Col xs={12} className='group mb-4'>
                                <Form.Group controlId="document"> 
                                    <Form.Control type="text" placeholder="" className="ctom-imput" required autoComplete="off"  onChange={handleChange}/>
                                    <Form.Label>Numero de Documento</Form.Label>
                                </Form.Group>

                            </Col>

                            <Col xs={12} className='group mb-4'>
                                <Form.Group controlId="celphone">
                                    <Form.Control type="text" placeholder="" className="ctom-imput" required autoComplete="off"  onChange={handleChange}/>
                                    <Form.Label>Numero de celular</Form.Label>
                                </Form.Group>
                            </Col>


                            <Col xs={12} className='group mb-4'>
                                <Form.Group controlId="email">
                                    <Form.Control type="email" placeholder="" className="ctom-imput" required onChange={handleChange}/>
                                    <Form.Label>Correo electronico</Form.Label>
                                </Form.Group>
                            </Col>

                            <Col xs={12} className='group mb-4'>
                                <Form.Group controlId="addres">
                                    <Form.Control type="text" placeholder=""  onChange={handleChange} />
                                    <Form.Label>Direccion de localdiad</Form.Label>
                                </Form.Group>
                            </Col>

                            <Col xs={6} className='group mb-4'>
                                <Form.Group controlId="password">
                                    <Form.Control type="password" placeholder="" className="ctom-imput" required autoComplete="off" onChange={handleChange} />
                                    <Form.Label>Contraseña</Form.Label>
                                </Form.Group>
                            </Col>

                            <Col xs={6} className='group mb-4'>
                                <Form.Group controlId="vali_password">
                                    <Form.Control type="password" placeholder="" className="ctom-imput" required  onChange={handleChange}/>
                                    <Form.Label>Validación contraseña</Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="outline-warning" onClick={handleSubmit}>Registrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}





export default ModalRegister;