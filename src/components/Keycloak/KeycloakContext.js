// KeycloakContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

const KeycloakContext = createContext();


export const useKeycloak = () => useContext(KeycloakContext);

export const KeycloakProvider = ({ children }) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  
  useEffect(() => {
    const kc = new Keycloak({
      url: "http://ec2-3-12-115-86.us-east-2.compute.amazonaws.com:8080/",
      realm: "TurnsManagementApp",
      clientId: "react-js-frond-end-1"
    });

    kc.init({ onLoad: 'check-sso' }).then(authenticated => {
      setKeycloak(kc);
    }).catch(error => {
      console.error('Keycloak init failed', error);
    });
  }, []);

  return (
    <KeycloakContext.Provider value={keycloak}>
      {children}
    </KeycloakContext.Provider>
   
  );
};