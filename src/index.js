import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/router';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { KeycloakProvider } from './components/Keycloak/KeycloakContext'; // Importa el proveedor del contexto
import './customStyle.css';
import { Table, Button } from 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <KeycloakProvider>
    <Router />
</KeycloakProvider>
);

