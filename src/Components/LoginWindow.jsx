import React, { useState } from 'react'
import '../styles/LoginWindow.css'

const LoginWindow = ({registration, close, setLoginOpened, setRegistrationOpened, toLogin})=>{    
    let phrase = `Please, insert you ${registration ? 'email,' : ''} login and password`
    let coverHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
    let [form, setForm] = useState({login: '', password: '', email: ''})

    const toLoginHOC = (event)=>{
        event.preventDefault()
        toLogin({...form})
    }
    
    const changeForm = (event)=>{
        event.preventDefault()
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className="auth-window">
            <div className="login-modal">
                <div className="login-headline">{phrase}</div>
                <div className="log-reg-buttons">
                        <div className={"log-switch" + (!registration ? " checked-log-reg" : '')} onClick={setLoginOpened}>SIGN IN</div>
                        <div className={"reg-switch" + (registration ? " checked-log-reg" : '')} onClick={setRegistrationOpened}>CREATE ACCOUNT</div>
                </div>
                <form>
                    {registration && <input type="text" placeholder="email" name="email" onChange={changeForm} />}
                    <input type="text" placeholder="login" name="login" onChange={changeForm} />
                    <input type="password" placeholder="password" name="password" onChange={changeForm} />
                    {registration ? 
                        <div>
                            <button type="submit">Create Account</button>
                        </div> 
                        : 
                        <div>
                            <button type="submit" onClick={toLoginHOC}>Sign in</button>
                        </div>
                    }
                </form>
                <div className="closed" onClick={close}></div>
            </div>
            
            <div className="cover" style={{height: coverHeight}}></div>
        </div>
    )
}

export default LoginWindow