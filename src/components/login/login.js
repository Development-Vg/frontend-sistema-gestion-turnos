import React from 'react';
import './login.css';


import Example1 from '../registry/registry';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';


import { useEffect, useState } from 'react';
// import Keycloak from 'keycloak-js';
import { Navigate } from 'react-router-dom';


///
import { useKeycloak } from '../Keycloak/KeycloakContext';



/*
const keycloakOptions = {
    url: "http://ec2-3-12-115-86.us-east-2.compute.amazonaws.com:8080/",
    realm: "TurnsManagementApp",
    clientId: "react-app-prueba"
}
*/

function Login() {
     const keycloak = useKeycloak(); // Usa el hook para acceder a la instancia de Keycloak
   
    return (
        <div>
               {/* { keycloak  && keycloak.authenticated? ( */}
            { keycloak? (
                // <h1>BIENVENIDO </h1>
                
                    <Navigate to="/homeadmin" /> 

                // ir al componente home ?

                /*<div> <h1>inicio sesión </h1>
                    <p>Usuario: {keycloak.tokenParsed.preferred_username}</p>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                    Navigate to= homeadmin
                    
                </div>*/
            ) : (
                <div>
                <h2>Estado de keycloak: {keycloak ? 'Inicializado' : 'No inicializado'}</h2>
                <h2>Autenticado: {keycloak && keycloak.authenticated ? 'Sí' : 'No'}</h2>
            </div>
            
            )}
        </div>

    );
}





function Login1() {
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



/*
function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="wrapper fadeInDown">
                <div className="container main">
                    <div className="row custom-row">
                        <div className="col-md-6 image">
                            //  Aquí puedes colocar la imagen si la necesitas 
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
                                                //  <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='google logo' /> 
                                                Continue with Google
                                            </a>
                                        </div>


                                    </Col>

                                    <Col xs={4}>
                                        <div className='socials-row  mb-4'>
                                            <a href='https://github.com/login' title='use gitHub'>
                                                //  <img src='https://img.icons8.com/ios-glyphs/30/000000/github.png' alt='gitHub logo' /> 
                                                Continue with gitHub
                                            </a>
                                        </div>

                                    </Col>

                                    <Col xs={4}>
                                        <div className='socials-row'>
                                            <a href='https://es-la.facebook.com/login/device-based/regular/login/' title='use facebook'>
                                                //  <img src='https://img.icons8.com/color/48/000000/facebook.png' alt='facebook logo' /> 
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
}*/

export default Login;





