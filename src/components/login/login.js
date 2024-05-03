import React from 'react';
import './login.css';

function Login() {
   

    return (
        
         <div className="form-wrapper" >
            <main className="form-side">
                <a href='#' title='logo'></a>
                <form className="my-form">
                    <div className='form-welcome-row'>
                        <h1>Welcome back!</h1>
                        <h1>Login whit you account!</h1>
                    </div>
                    <div className='socials-row'>
                        <a href='#' title='use google'>
                            <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='google logo' />
                            Continue with Google
                        </a>
                    </div>
                    <div className='socials-row'>
                        <a href='#' title='use gitHub'>
                            <img src='https://img.icons8.com/ios-glyphs/30/000000/github.png' alt='gitHub logo' />
                            Continue with gitHub
                        </a>
                    </div>
                    <div className='socials-row'>
                        <a href='#' title='use facebook'>
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
                        <input id='password'type='email' name='email' placeholder='you password' required
                        pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'></input>
                        <div className='error-message'>minimun 8 characters</div>
                    </div>
                    <div>
                        <button className='my-form__button' type='submit'>Sign In</button>
                        <div className='my-form__row'>
                            <span>Don't have an account?</span>
                            <a href='#' title='reset password'>Sind up Now </a>

                        </div>
                    </div>
                </form>
            </main>
            <aside className='info-aside'>
                <div className='blockquote-wrapper'>
                    <img src=''  alt='Returns' className='returns'></img>
                    <blockquote>

                    </blockquote>
                    <div className='author'>
                        <img src='hola' alt='Avatar' className='avatar'></img>
                        <span className='author-name'>nnn</span>
                    </div>
                </div>
            </aside>
         </div>
    );
}

export default Login;