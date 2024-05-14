import React from 'react';
import { useKeycloak } from '../Keycloak/KeycloakContext'; 


function Home() {
    const keycloak = useKeycloak();

 
    return (
        <div>
            <h1>home</h1>
            {/* <p>Usuario: {keycloak.tokenParsed.preferred_username}</p> */}
            <div>
                <h2>Estado de keycloak: {keycloak ? 'Inicializado' : 'No inicializado'}</h2>
                <h2>Autenticado: {keycloak && keycloak.authenticated ? 'Sí' : 'No'}</h2>
            </div>
            <button onClick={keycloak.handleLogout}>Cerrar sesión</button>
        </div>
    );
}

export default Home;