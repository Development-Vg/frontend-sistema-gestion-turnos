import React, { createContext, useContext, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

// Creamos el contexto
const KeycloakContext = createContext();

// Hook personalizado para acceder al contexto
export const useKeycloak = () => useContext(KeycloakContext);

// Proveedor del contexto
export const KeycloakProvider = ({ children }) => {
  const [keycloak, setKeycloak] = useState(null);

  // Configuración de Keycloak
  const keycloakOptions = {
    url: "http://ec2-3-12-115-86.us-east-2.compute.amazonaws.com:8080/",
    realm: "TurnsManagementApp",
    clientId: "react-js-frond-end"
  };


   // Función para manejar el cierre de sesión
  const handleLogout = () => {
    if (keycloak) {
      keycloak.logout();
    }
  };

  // Inicialización de Keycloak al cargar el componente
  useEffect(() => {
    const initKeycloak = async () => {
      try {
        const keycloakInstance = new Keycloak(keycloakOptions);
        await keycloakInstance.init({ onLoad: 'login-required' });
        setKeycloak(keycloakInstance);

         // Si el usuario está autenticado
         /*if (keycloakInstance.authenticated) {
          console.log('Usuario autenticado:', keycloakInstance.tokenParsed.preferred_username);
          console.log('Token:', keycloakInstance.token);
        }*/

      } catch (error) {
        console.error('Error initializing Keycloak:', error);
      }
    }

    initKeycloak();
  }, []);

  return (
    <KeycloakContext.Provider value={{keycloak, handleLogout}} >
      {children}
    </KeycloakContext.Provider>
  );
};
