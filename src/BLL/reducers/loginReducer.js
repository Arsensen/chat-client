const initialState = {
    login: false,
    registration: false
}

const loginReducer = (state = initialState, action)=>{
    let newState
    switch(action.type){
        case 'LOGIN_OPEN':
            newState = {...state}
            newState.login = true
            newState.registration = false
            return newState
        case 'LOGIN_CLOSE':
            newState = {...state}
            newState.login = false
            newState.registration = false
            return newState
        case 'REGISTRATION_OPENED':
            newState={...state}
            newState.login = false
            newState.registration = true
            return newState
        default:
            return state
    }
}

export default loginReducer