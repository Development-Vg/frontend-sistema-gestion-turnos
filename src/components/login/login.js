import React, { useEffect, useState } from 'react';
import './login.css';
import { useKeycloak } from '../Keycloak/KeycloakContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Login() {
    const keycloak = useKeycloak();
    const [navigation, setNavigation] = useState(null);

    useEffect(() => {
        const fetchUserRole = async () => {
            if (keycloak && keycloak.authenticated) {
                await keycloak.updateToken();
                const accessToken = keycloak.token;
                const email = keycloak.tokenParsed?.email;

                console.log("login token: " , accessToken);
                
                const config = {
                    headers: { Authorization: `Bearer ${accessToken}` }
                };

                try{
                    console.log("el emal enviado es: ", email)
                    const response = await axios.get(`${process.env.REACT_APP_BCKEND}/listUsers/login?email=${email}`, config);
                    const userId = response.data;
                    console.log("es la verdad id : ", userId)

                    const roles = keycloak.tokenParsed?.realm_access?.roles || [];
                    const isAdmin = roles.includes('admin');
                    setNavigation(isAdmin ? <Navigate to="/homeadmin" /> : <Navigate to={`/home?userId=${userId}`} />);

                }catch(error){
                    console.error('Error al obtener el ID del usuario', error);
                }
            }
        };

        fetchUserRole();
    }, [keycloak]);

    useEffect(() => {
        if (keycloak && !keycloak.authenticated) {
            keycloak.login();
        }
    }, [keycloak]);

    return (
        <div>
            {navigation}
        </div>
    );
}

export default Login;





