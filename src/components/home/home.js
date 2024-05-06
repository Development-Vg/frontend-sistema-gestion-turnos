import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './home.css';

function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const keycloak = location.state.keycloak;

    const handleLogout = () => {
        if (keycloak) {
            keycloak.logout();
        }
    }

    const handleAppointment = () => {
        navigate('/appointment');
    }

    return (
        <div>
    <button className="appointment-button" onClick={handleAppointment}>Cita</button>
    <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
</div>
    );
}

export default Home;