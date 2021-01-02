const initialState = {
    userName: 'Alex',
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOStlKsWXECkqUMinPHsWx_cpukTpLW7m9Q&usqp=CAU",
    messages: [
        {
            message: 'yeah, I know!1',
            me: true,
            date: new Date()
        },
        {
            message: 'yeah, I know!2',
            me: false,
            date: new Date()
        },
        {
            message: 'yeah, I know!3',
            me: true,
            date: new Date()
        },
        {
            message: 'yeah, I know!4',
            me: false,
            date: new Date()
        },
        {
            message: 'yeah, I know!5',
            me: true,
            date: new Date()
        }
    ]
}

const messagesReducer = (state = initialState, action) => {
    switch (action){
        case 'REFRESH_MESSAGES':
            return state
        default:
            return state
    }
}

export default messagesReducer