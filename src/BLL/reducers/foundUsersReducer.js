const initialState={
    title: 'Found',
    users:  [{
        userName: 'Founded',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
        buttonName: 'Add to contacts',
        id: 1
    },
    {
        userName: 'Bitter',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
        buttonName: 'Add to contacts',
        id: 2
    },
    {
        userName: 'Cutter',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
        buttonName: 'Add to contacts',
        id: 3
    }]
}

const foundUsersReducer = (state = initialState, action)=>{
    switch(action.type){
        case('ADD_FOUND'):
            return state
        default:
            return state
    }
}

export default foundUsersReducer