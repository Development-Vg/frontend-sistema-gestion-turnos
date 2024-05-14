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
    clientId: "react-app-prueba"
  };

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
