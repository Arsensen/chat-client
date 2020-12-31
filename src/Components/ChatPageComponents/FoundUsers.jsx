import React from 'react'

const FoundUsers = ({array})=>{
    return (
        <div className='contacts-block'>
                <div>{array.title}</div>
                {array.users.map(({userName, src, buttonName, id})=>{
                    return(
                        <div key={id}>
                            <img src={src} alt="foto"/>
                            <span>{userName}</span> 
                            <span>{buttonName}</span>
                        </div>
                    )
                })}
        </div>
    )
}
//Передовать сюда функцию для кнопок добавить/удалить

export default FoundUsers