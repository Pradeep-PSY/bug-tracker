import { LOGIN_SUCCESS, MSG_METHOD, SIGNUP_SUCCESS } from "./action.types"
import axios from 'axios';


export const SignupApi = (data) => dispatch => {
    axios.post('http://localhost:5000/user/signup', data)
    .then((res) => dispatch({type: SIGNUP_SUCCESS, payload: res.data}))
    .catch((err) => console.error(err))
}

export const Msgmethod = () => dispatch => {
    dispatch({type: MSG_METHOD})
}

export const LoginApi = (data) => dispatch => {
    console.log(data)
    axios.post('http://localhost:5000/user/login', data)
    .then((res) => dispatch({type: LOGIN_SUCCESS, payload: res.data}))
    .catch((err)=> console.log(err))
}