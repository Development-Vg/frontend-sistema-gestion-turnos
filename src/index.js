import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { KeycloakProvider } from '../src/components/home/KeycloakContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <KeycloakProvider>
     <Router />
  </KeycloakProvider>
  // <React.StrictMode>
  
  // </React.StrictMode>
);
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/