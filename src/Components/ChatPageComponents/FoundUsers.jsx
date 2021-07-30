import React from 'react'
/* import { useParams } from 'react-router-dom' */

//Add functions to props (sendAddContact, sendDeleteContact, fetchMessages)

const FoundUsers = ({array, sendAddContact, sendDeleteContact, fetchMessages})=>{
    let buttonFunc
    array.buttonName === 'Add' ? buttonFunc = sendAddContact : buttonFunc = sendDeleteContact
    let chooseDialog = array.buttonName === 'Add' ? ()=>{} : (id, userName, src)=>()=>{fetchMessages(id, userName, src)}
    return (
        <div className='contacts-block'>
                <div className="contact-block-title">{array.title}</div>
                {array.users.map(({userName, src, id})=>{
                    return(
                        <div key={id} className={array.title === 'Contacts' ? 'namelist contactslist' : 'namelist'} onClick={chooseDialog(id, userName, src)}>  
                            <img src={src} alt="foto"/>
                            <span>{userName}</span> 
                            <button onClick={buttonFunc}>{array.buttonName}</button>
                        </div>
                    )
                })}
        </div>
    )
}

// chooseDialog должен запрашивать по id (если пользователь с таким id есть в списке контактов) сообщения и диспатчить их в redux-store

export default FoundUsers

//заделать отдельный css для мелких экранов телефонов