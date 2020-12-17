import React from 'react'
import { connect } from 'react-redux'
import logo from '../assets/images/Chatter-logo.jpg'
import '../styles/Header.css'

const Header = ({setLoginOpened})=>{
    return(
        <div className="Header">
            <img src={logo} alt="logo"/>
            <div className="logo-text">
                ChatterBox
            </div>
            <div className="login-wrap">
                <div className="login" onClick={setLoginOpened}> Log In </div>
            </div>
        </div>
    )
}

const mapDispatch=(dispatch)=>{
    return {
        setLoginOpened: ()=>{dispatch({type: 'LOGIN_OPEN'})}
    }
}

export default connect(null, mapDispatch)(Header)