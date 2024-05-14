
import React, { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

export const KeycloakContext = React.createContext(null);

const keycloakOptions = {
    url: "http://ec2-3-12-115-86.us-east-2.compute.amazonaws.com:8080/",
    realm: "TurnsManagementApp",
    clientId: "react-js-frond-end",
    clientSecret: "REaq8mYh4UH5siplcUcMG5SDxyJXSI4t"
}

export const KeycloakProvider = ({ children }) => {
    const [keycloak, setKeycloak] = useState(null);

    useEffect(() => {
        const initKeycloak = async () => {
            try {
                const keycloakInstance = new Keycloak(keycloakOptions);
                await keycloakInstance.init({ onLoad: 'login-required' });
                setKeycloak(keycloakInstance);
                if (keycloakInstance.authenticated) {
                    console.log(keycloakInstance)
                    console.log("el token es:" + keycloakInstance.token)
                }
            } catch (error) {
                console.error('Error initializing Keycloak:', error);
            }
        }
        initKeycloak();
    }, [])

    const handleLogout = () => {
        if (keycloak) {
            keycloak.logout();
        }
    };

    return (
        <KeycloakContext.Provider value={{ keycloak, handleLogout }}>
            {children}
        </KeycloakContext.Provider>
    );
}