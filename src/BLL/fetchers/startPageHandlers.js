import Axios from 'axios'

export const loginization =(form)=>async (dispatch)=>{
    try {
        let response = await Axios.post('/login', {login: form.login, password: form.password})
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}