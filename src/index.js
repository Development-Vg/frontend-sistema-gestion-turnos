import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/router';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { KeycloakProvider } from './components/Keycloak/KeycloakContext'; // Importa el proveedor del contexto
import './customStyle.css';
import { Toaster } from 'sonner'; 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <KeycloakProvider>
    <Router />
    <Toaster richColors position='top-right' duration={5000} visibleToasts={4}/>
</KeycloakProvider>
);

