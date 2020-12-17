import React from 'react'
import '../styles/LoginWindow.css'

export const LoginWindow = ({registration, close})=>{    
    return (
        <div className="auth-window">
            <div className="login-modal">
                <div className="login-headline">Please, insert you login and password</div>
                <div className="log-reg-buttons">
                        <div className="log-switch">SIGN IN</div>
                        <div className="reg-switch">CREATE ACCOUNT</div>
                </div>
                <form>
                    {registration && <input type="text" placeholder="email" />}
                    <input type="text" placeholder="login" />
                    <input type="password" placeholder="password" />
                    {registration ? 
                        <div>
                            <button>Create Account</button>
                        </div> 
                        : 
                        <div>
                            <button type="submit">Sign in</button>
                        </div>
                    }
                </form>
                <div className="closed" onClick={close}></div>
            </div>
            
            <div className="cover"></div>
        </div>
    )
}