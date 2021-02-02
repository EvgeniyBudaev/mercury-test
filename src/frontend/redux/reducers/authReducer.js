import {AUTH_SUCCESS} from "../constants";

const initialState = {
    email: '1@1.ru',
    password: '123456',
    isLogin: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                isLogin: action.payload.isLogin,
            }
        default:
            return state
    }
}

export default authReducer