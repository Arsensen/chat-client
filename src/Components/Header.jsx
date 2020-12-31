import React from 'react'
import { connect } from 'react-redux'
import logo from '../assets/images/Chatter-logo.jpg'
import '../styles/Header.css'
import { useHistory, useParams } from 'react-router-dom'

const Header = ({setLoginOpened, setLoginClosed})=>{
    const history = useHistory()
    const params = useParams()
    console.log(params)

    const chat = history.location.pathname === '/chat' ? <div className="login" onClick={()=>{setLoginClosed(); history.push('/')}}> Log out </div> : <div className="login" onClick={setLoginOpened}> Log In </div>

    return(
        <div className="Header">
            <img src={logo} alt="logo"/>
            <div className="logo-text">
                ChatterBox
            </div>
            <div className="login-wrap">
                {chat}
            </div>
        </div>
    )
}

const mapDispatch=(dispatch)=>{
    return {
        setLoginOpened: ()=>{dispatch({type: 'LOGIN_OPEN'})},
        setLoginClosed: ()=>{dispatch({type: 'LOGIN_CLOSE'})}
    }
}

export default connect(null, mapDispatch)(Header)