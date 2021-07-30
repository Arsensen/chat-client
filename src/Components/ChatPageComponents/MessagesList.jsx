import React from 'react'

const MessagesList = ({arrayOfMessages})=>{
    return(
        <ul className="messages-ul">
            {arrayOfMessages.map((mes)=>{
                return (
                    <li className={mes.me ? 'my-message' : ''} key={mes.message + mes.date}>
                        {mes.message}
                    </li>
                )
            })}
        </ul>
    )
}

// каждое сообщение это объект с 3 свойствами: message, I am, Date
// сортируем все сообщения по дате
// мапим все сообщение с условным приминением класса(по условию свойства I am)

export default MessagesList