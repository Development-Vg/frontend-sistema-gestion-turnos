import React, { useEffect, useState } from 'react';
import './login.css';
import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: 'http://ec2-18-118-103-151.us-east-2.compute.amazonaws.com:8080/',
    realm: 'TurnsManagementApp',
    clientId: 'react-js-frond-end',
    clientSecret: ''
}


function Login() {
   
    const [keycloak, setKeycloak] = useState(null);
    useEffect(() => {
        const initKeycloak = async () => {
            const keycloakInstance = new Keycloak(keycloakConfig);
            try {
                await keycloakInstance.init({
                    onLoad: 'login-required',
                });
                setKeycloak(keycloakInstance);
                if (keycloakInstance.authenticated) {
                    console.log(keycloakInstance);
                }
            } catch (error) {
                console.error('Auth error', error);
            }
        }
        initKeycloak();
    }, []);

    const handleLogout = () => {
        if (keycloak) {
            keycloak.logout();
        }
    }
    return (

        <div className="form-wrapper" >
            <main className="form-side">
                <a href='https://www.uptc.edu.co/sitio' title='logo'>
                    <img src='./logo.png' alt='logo' />
                </a>
                <form className="my-form">
                    <div className='form-welcome-row'>
                        <h1>Welcome back!</h1>
                        <h2>Login whit you account!</h2>
                    </div>
                    <div className='socials-row'>
                        <a href='https://takeout.google.com/?hl=es' title='use google'>
                            <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='google logo' />
                            Continue with Google
                        </a>
                    </div>
                    <div className='socials-row'>
                        <a href='https://github.com/login' title='use gitHub'>
                            <img src='https://img.icons8.com/ios-glyphs/30/000000/github.png' alt='gitHub logo' />
                            Continue with gitHub
                        </a>
                    </div>
                    <div className='socials-row'>
                        <a href='https://es-la.facebook.com/login/device-based/regular/login/' title='use facebook'>
                            <img src='https://img.icons8.com/color/48/000000/facebook.png' alt='facebook logo' />
                            Continue with facebook
                        </a>
                    </div>
                    <div className='divider'>
                        <div className='divider-line'></div>or<div className='divider-line'></div>
                    </div>
                    <div className='text-field'>
                        <label for='email'>Email</label>
                        <input type='email' id='email' name='email' placeholder='you@example' required></input>
                        <div className='error-message'>Email incorrect format</div>
                    </div>
                    <div className='text-field'>
                        <label for='email'>Password</label>
                        <input id='password' type='email' name='email' placeholder='you password' required
                            pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'></input>
                        <div className='error-message'>minimun 8 characters</div>
                    </div>
                    <div>
                        <button className='my-form__button' type='submit'>Sign In</button>
                        <div className='my-form__actions'>
                            <div className='my-form__row'>
                                <span>Don't have an account?</span>
                                <a href='https://www.uptc.edu.co/sitio' title='reset password'>Sind up Now </a>

                            </div>
                        </div>

                    </div>
                </form>
            </main>
            <aside className='info-side'>

            </aside>
        </div>
    );
}

export default Login;