// Login.js
import React, { useContext, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { KeycloakContext } from '../home/KeycloakContext'; // Asegúrate de importar el contexto de Keycloak
import { Navigate } from 'react-router-dom';

function Login() {
    const { keycloak } = useContext(KeycloakContext); // Utiliza el contexto de Keycloak
    const navigate = useNavigate();

    useEffect(() => {
        if (keycloak && keycloak.authenticated) {
            navigate('/homeadmin');
        }
    }, [keycloak, navigate]);

    return (
        <div>
            <h1>isss </h1>
            {keycloak? (
                   <Navigate to="/home" /> 

            ) : (
                <dir>
                    <h2>Login</h2>
                </dir>
            )}
        </div>
    );
}

export default Login;





