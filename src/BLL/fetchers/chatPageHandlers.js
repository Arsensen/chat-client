/* import axios from 'axios' */

export const AddContact = (dispatch)=> async(id)=>{
    /* let added = await axios.post('', id) */
    // here - handle errors
    // here should be call of other function that fetches new data from contacts array and dispatch it to re-render MyContacts Component

}

export const DeleteContact = (dispatch)=> (id)=>{
    
}

// Refactor everything after creating Server

export const bringMessages = (id, userName, src)=>async (dispatch)=>{
    dispatch({type: 'UPDATE_MESSAGES_INFO', userName, src})
    //let messages = await axios.get('')
    //передавать id на сервер, чтобы там был поиск в MongoDB по id базы сообщений для текущего пользователя
    //нужно ли передавать токен и какие-то заголовки
    //при получении ответа диспатчить его в messagesReducer
}