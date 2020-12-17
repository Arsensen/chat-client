import {combineReducers, createStore} from 'redux'
import loginReducer from './reducers/loginReducer'

const reducers = combineReducers({
    loginization: loginReducer,
})

const store = createStore(reducers)

export default store

window.store = store