const initialState={
    title: 'Recommended',
    buttonName: 'Add',
    users:  [
        {
            userName: 'Admin',
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
            id: 10
        }
    ]
}

const recommendationsReducer = (state = initialState, action)=>{
    switch(action.type){
        case('ADD_RECOMMENDATIONS'):
            return state
        default:
            return state
    }
}

export default recommendationsReducer