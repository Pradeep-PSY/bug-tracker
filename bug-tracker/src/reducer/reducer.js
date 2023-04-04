import { LOGIN_SUCCESS, MSG_METHOD, SIGNUP_SUCCESS } from "../actions/action.types"

const intialState = {
    isAuth : false,
    msg : ''
}

export const appReducer = (state = intialState, {type, payload}) => {
    switch(type){
        case SIGNUP_SUCCESS : {
            return {
                ...state,
                msg : payload
            }
        }

        case MSG_METHOD : {
            return {
                ...state,
                msg : ''
            }
        }

        case LOGIN_SUCCESS : {
            return {
                ...state,
                msg : payload.msg,
                isAuth : payload.isAuth
            }
        }
        default : return state
    }
}

