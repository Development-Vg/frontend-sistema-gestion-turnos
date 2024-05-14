import React, { useState } from 'react';

function Home() {
    const [keycloak, setKeycloak] = useState(null);

    const handleLogout = () => {
        if (keycloak && keycloak.authenticated) {
           keycloak.logout();
        }
   };

    return (
        <div>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
}

export default Home;