import React from 'react'
import { connect } from 'react-redux'
import MessagesList from './MessagesList'
import '../../styles/Messages.css'

const Messages = ({userName, src, messages})=>{
    return(
        <div className="messages">
            <div className="messages-info">
                <img src={src} alt="Foto"/><span>{userName}</span><span>online</span>
            </div>
            <div className="messages-cover">
                <MessagesList arrayOfMessages={messages} />
            </div>
            <form>
                <input type="text" placeholder="Write your message..." />
                <button>Send</button>
            </form>
        </div>
    )
}

const mapState=(state)=>{
    return {
        messages: state.messages.messages,
        userName: state.messages.userName,
        src: state.messages.src
    }
}

const mapDispatch=(dispatch)=>{
    return {
        
    }
}

export default connect(mapState, mapDispatch)(Messages)