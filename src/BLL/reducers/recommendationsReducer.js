const initialState={
    title: 'Recommended',
    buttonName: 'Add',
    users:  [{
        userName: 'Founded',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
        id: 10
    },
    {
        userName: 'Bitter',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
        id: 20
    },
    {
        userName: 'Cutter',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
        id: 30
    }]
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