import React, { useState } from 'react'
import { connect } from 'react-redux'
import FoundUsers from './FoundUsers'
import '../../styles/Contacts.css'

const Contacts = ({recommendedUsers, myContacts, foundUsers})=>{
    const [currentInput, setCurrentInput] = useState(null)
    const [findUsers, setFindUsers] = useState(false)

    const updateFoundedUsers = (value)=>{
        if(!!value){
            setFindUsers(true)
            console.log(value)
        }
    }
    const contactsList = findUsers ? 
            <>
                <div className="contacts-back-btn" onClick={()=>{setFindUsers(false)}}><span>&#8592;</span><span>Contacts</span></div>
                <FoundUsers array={foundUsers} />
            </> 
            :
            <>
                {myContacts.users.length ? <FoundUsers array={myContacts} /> : <div className="contacts-block">No contacts have found</div>}
                <FoundUsers array={recommendedUsers} />
            </>
            
    return(
        <div className="contacts">
            <form className="contacts-form">
                <input type="text" placeholder="search" onChange={(e)=>{setCurrentInput(e.target.value)}} />
                <button onClick={(e)=>{e.preventDefault(); updateFoundedUsers(currentInput)}}>Find</button>
            </form>
            {contactsList}
        </div>
    )
}

//Добавить сортировку по 10 и снизу кнопку "Следующие 10" для всех контактов и найденных пользователей или поиск убрать в отдельное модальное окно и счетчик того, сколько совпадений

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