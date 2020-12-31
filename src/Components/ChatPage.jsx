import React from 'react'
import Contacts from './ChatPageComponents/Contacts'
import Messages from './ChatPageComponents/Messages'
import '../styles/ChatPage.css'

const ChatPage = ()=>{
    return(
        <div className="chatPage">
            <Contacts />
            <Messages />
        </div>
    )
}

export default ChatPage

//Переписать Header чтоб он не менял стейт для окна логинизации в окне Чата