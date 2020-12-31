import React from 'react'
import '../styles/LoginWindow.css'

export const LoginWindow = ({registration, close, setLoginOpened, setRegistrationOpened})=>{    
    let phrase = `Please, insert you ${registration ? 'email,' : ''} login and password`
    let coverHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
    
    return (
        <div className="auth-window">
            <div className="login-modal">
                <div className="login-headline">{phrase}</div>
                <div className="log-reg-buttons">
                        <div className={"log-switch" + (!registration ? " checked-log-reg" : '')} onClick={setLoginOpened}>SIGN IN</div>
                        <div className={"reg-switch" + (registration ? " checked-log-reg" : '')} onClick={setRegistrationOpened}>CREATE ACCOUNT</div>
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
            
            <div className="cover" style={{height: coverHeight}}></div>
        </div>
    )
}