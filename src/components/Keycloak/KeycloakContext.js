// KeycloakContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

const KeycloakContext = createContext();

export const useKeycloak = () => useContext(KeycloakContext);

export const KeycloakProvider = ({ children }) => {
  const [keycloak, setKeycloak] = useState(null);

  useEffect(() => {
    const kc = new Keycloak({
      url: "http://ec2-3-12-115-86.us-east-2.compute.amazonaws.com:8080/",
      realm: "TurnsManagementApp",
      clientId: "react-js-frond-end-1"
    });

    kc.init({ onLoad: 'login-required' })
      .then(authenticated => {
        setKeycloak(kc);
      });
  }, []);

  return (
    <KeycloakContext.Provider value={keycloak}>
      {children}
    </KeycloakContext.Provider>
  );
};