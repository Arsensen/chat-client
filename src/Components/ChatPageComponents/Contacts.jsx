import React, { useState } from 'react'
import { connect } from 'react-redux'
import FoundUsers from './FoundUsers'

const Contacts = ({recommendedUsers, myContacts, foundUsers})=>{
    const [findUsers, setFindUsers] = useState(false)

    const contactsList = findUsers ? 
            <>
                <div className="contacts-back-btn" onClick={()=>{setFindUsers(false)}}> &#8592; My Contacts</div>
                <FoundUsers array={foundUsers} />
            </> :
            <>
                {myContacts.users.length ? <FoundUsers array={myContacts} /> : <div className="contacts-block">No contacts have found</div>}
                <FoundUsers array={recommendedUsers} />
            </>
            
    return(
        <div className="contacts">
            <form className="contacts-form">
                <input type="text" placeholder="search" />
                <button onClick={(e)=>{e.preventDefault(); setFindUsers(true)}}>Find</button>
            </form>
            {contactsList}
        </div>
    )
}

//Добавить сортировку по 10 и снизу кнопку "Следующие 10" для всех контактов и найденных пользователей или поиск убрать в отдельное модальное окно

const mapState = (state)=>{
    return {
        recommendedUsers: state.recommendations,
        myContacts: state.myContacts,
        foundUsers: state.foundUsers
    }
}

const mapDispatch = (dispatch)=>{
    return {
        
    }
}

export default connect(mapState, mapDispatch)(Contacts)