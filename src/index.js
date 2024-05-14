import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { KeycloakProvider } from './components/Keycloak/KeycloakContext'; // Importa el proveedor del contexto

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <KeycloakProvider>
    <Router />
  </KeycloakProvider>

  // </React.StrictMode>
);
