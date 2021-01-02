import {combineReducers, createStore} from 'redux'
import foundUsersReducer from './reducers/foundUsersReducer'
import loginReducer from './reducers/loginReducer'
import messagesReducer from './reducers/messagesReducer'
import myContactsReducer from './reducers/myContactsReducer'
import recommendationsReducer from './reducers/recommendationsReducer'

const reducers = combineReducers({
    loginization: loginReducer,
    recommendations: recommendationsReducer,
    myContacts: myContactsReducer,
    foundUsers: foundUsersReducer,
    messages: messagesReducer
})

const store = createStore(reducers)

export default store

window.store = store