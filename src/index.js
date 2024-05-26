import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import Router from './router/router';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { KeycloakProvider } from './components/Keycloak/KeycloakContext'; // Importa el proveedor del contexto
import './customStyle.css';
import { Table, Button } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
/*
  <div>


    <button className='btn '>hola mundo</button>

    <button type="button" class="btn btn-primary">Primary</button>


    <Table>
         <thead className="table-info"> 
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>




  </div>*/
  // <React.StrictMode>
  //<KeycloakProvider>
    <Router />
 // </KeycloakProvider>

  // </React.StrictMode>
);
