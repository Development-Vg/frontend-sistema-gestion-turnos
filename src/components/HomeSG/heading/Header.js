import React, { useState } from "react";
import {Head} from "./Head";
import "./header.css";
import "../HomeSG.css";
import { Link, useNavigate } from 'react-router-dom';
import ModalRegister from '../../registry/registry';

export const Header = () => {
    const [click, setClick] = React.useState(false);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    return (
        <>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className="flexSB">
                        <li><Link to="/servicos">Home</Link></li>
                        <li><Link to="/servicos">Servicos</Link></li>
                        <li><Link to="/servicos">Sobre Nosotros</Link></li>
                        <li><Link to="/servicos">Jornada</Link></li>
                        <li><Link to="/servicos">Contacto</Link></li>
                    </ul>
                    <div className="start_1">
                        <div className="button"  onClick={handleShowModal} >Registrarse</div>
                        <ModalRegister show={showModal} handleClose={handleCloseModal} />
                    </div>
                    <div className="start">
                        <div className="button" onClick={() => navigate('/login')}>Iniciar Sesion</div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;