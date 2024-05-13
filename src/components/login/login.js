import React from 'react';
import './login.css';

import { useState } from 'react';
import Example1 from '../registry/registry';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="wrapper fadeInDown jj" >
                <div className="container main">
                    <div className="row custom-row">
                        <div className="col-md-6 image">
                            {/* Aquí puedes colocar la imagen si la necesitas */}
                        </div>
                        <div className="col-md-6 right">
                            <div className="input-box">
                                <h1>SDGT</h1>
                                <div className="input-field">
                                    <input type="text" className="input" id="username" required autoComplete="off" />
                                    <label htmlFor="username">Usuario</label>
                                </div>
                                <div className="input-field">
                                    <input type="password" className="input" id="password" required />
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                                <div className="input-field mb-4">
                                    <input type="submit" className="submit" value="Iniciar sesión" />
                                </div>


                                <Row>

                                    <Col xs={4}>
                                        <div className='socials-row mb-4 '>
                                            <a href='https://takeout.google.com/?hl=es' title='use google'>
                                                {/* <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='google logo' /> */}
                                                Continue with Google
                                            </a>
                                        </div>


                                    </Col>

                                    <Col xs={4}>
                                        <div className='socials-row  mb-4'>
                                            <a href='https://github.com/login' title='use gitHub'>
                                                {/* <img src='https://img.icons8.com/ios-glyphs/30/000000/github.png' alt='gitHub logo' /> */}
                                                Continue with gitHub
                                            </a>
                                        </div>

                                    </Col>

                                    <Col xs={4}>
                                        <div className='socials-row'>
                                            <a href='https://es-la.facebook.com/login/device-based/regular/login/' title='use facebook'>
                                                {/* <img src='https://img.icons8.com/color/48/000000/facebook.png' alt='facebook logo' /> */}
                                                Continue with facebook
                                            </a>
                                        </div>
                                    </Col>


                                </Row>

                                <div className="signin">
                                    <span>
                                        <a href="#" onClick={handleShow}>¿Olvidaste tu contraseña?</a>
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        ¿No tienes una cuenta?{' '}
                                        <a href="#" onClick={handleShow}>Regístrate</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Example1 show={show} handleClose={handleClose} />
        </>
    );
}

export default Login;





