const initialState={
    title: 'My Contacts',
    buttonName: 'Delete',
    users:  [{
        userName: 'Founded',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
        id: 11
    },
    {
        userName: 'Bitter',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
        id: 21
    },
    {
        userName: 'Cutter',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
        id: 31
    }]
}

const myContactsReducer = (state = initialState, action)=>{
    switch(action.type){
        case('ADD_CONTACTS'):
            return state
        default:
            return state
    }
}

export default myContactsReducer