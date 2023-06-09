import { LOGIN_SUCCESS, MSG_METHOD, SIGNUP_SUCCESS } from "./action.types"
import axios from 'axios';

//backend deployed on : https://bug-tracker-backend-y686.onrender.com/
export const SignupApi = (data) => dispatch => {
    axios.post('https://bug-tracker-backend-y686.onrender.com/user/signup', data)
    .then((res) => dispatch({type: SIGNUP_SUCCESS, payload: res.data}))
    .catch((err) => console.error(err))
}

export const Msgmethod = () => dispatch => {
    dispatch({type: MSG_METHOD})
}

export const LoginApi = (data) => dispatch => {
    console.log(data)
    axios.post('https://bug-tracker-backend-y686.onrender.com/user/login', data)
    .then((res) => dispatch({type: LOGIN_SUCCESS, payload: res.data}))
    .catch((err)=> console.log(err))
}