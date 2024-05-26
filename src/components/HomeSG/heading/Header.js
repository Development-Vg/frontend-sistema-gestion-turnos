import React from "react";
import {Head} from "./Head";
import "./header.css";
import "../HomeSG.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const [click, setClick] = React.useState(false);
    const navigate = useNavigate();
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
                        <div className="button">Registrarse</div>
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