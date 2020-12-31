import React from 'react'

const Messages = ()=>{
    return(
        <div className="messages">
            <div>USER NAME</div>
            <div>Messages</div>
            <form>
                <input type="text" placeholder="Write your message..." />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Messages