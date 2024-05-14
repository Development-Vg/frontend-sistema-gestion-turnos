import React from 'react';
import { useKeycloak } from '../Keycloak/KeycloakContext'; 


function Home() {
    const keycloak = useKeycloak();

 
    return (
        <div>
            <h1>home</h1>
            <button onClick={keycloak.handleLogout}>Cerrar sesión</button>
        </div>
    );
}

export default Home;