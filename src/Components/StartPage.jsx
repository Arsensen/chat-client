import React from 'react'
import { connect } from 'react-redux'
import { loginization } from '../BLL/fetchers/startPageHandlers'
import '../styles/StartPage.css'
import LoginWindow from './LoginWindow'

const StartPage = ({loginOpened, registration, setLoginClosed, setLoginOpened, setRegistrationOpened, toLogin})=>{
    return(
        <>
        <div className="start-page">
            <div className="welcome">Hi! This is testing app made just for fun and, may be, for portfolio. Perhaps there could be some bags, if you will find it you can send description of error to my e-mail address which you can find below.
                Don't worry about personal data, it will be deleted after 2 days if you won't confirm you e-mail. Now you can sign in to ChatterBox. Have a pleasant experience!
            </div>
            <div className="buttons">
                <button className="logining" onClick={setLoginOpened}>Log in</button>
                <button className="registration" onClick={setRegistrationOpened}>Registration</button>
            </div>
        </div>
        {(loginOpened || registration) && <LoginWindow setLoginOpened={setLoginOpened} setRegistrationOpened={setRegistrationOpened} registration={registration} close={setLoginClosed} toLogin={toLogin} />}
        </>
    )
}

const mapState = (state)=>{
    return {
        loginOpened: state.loginization.login,
        registration: state.loginization.registration
    }
}

const mapDispatch = (dispatch)=>{
    return{
        setLoginOpened: ()=>{dispatch({type: 'LOGIN_OPEN'})},
        setLoginClosed: ()=>{dispatch({type: 'LOGIN_CLOSE'})},
        setRegistrationOpened: ()=>{dispatch({type: 'REGISTRATION_OPENED'})},
        toLogin: (form)=>{ dispatch(loginization(form)) }
    }
}

export default connect(mapState, mapDispatch)(StartPage)