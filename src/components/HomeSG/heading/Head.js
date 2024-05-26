import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Head = () => {
    
    return (
        <section className='head'>
            <div className='container flexSB'>
                <div className='logo'>
                    <h1>CLINICA SDGT</h1>
                    <span>ATENCION DE LA MEJOR CALIDAD</span>
                </div>
                <div className='social'>
                    <FontAwesomeIcon className='header-icon' icon={faFacebookF} />
                    <FontAwesomeIcon className='header-icon' icon={faInstagram} />
                    <FontAwesomeIcon className='header-icon' icon={faTwitter} />
                    <FontAwesomeIcon className='header-icon' icon={faYoutube} />
                </div>
            </div>
        </section>
    );
}

export default Head;
