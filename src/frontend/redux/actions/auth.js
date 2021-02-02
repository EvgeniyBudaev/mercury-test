import {AUTH_SUCCESS} from "../constants";


export const auth = (email, password, isLogin) => async (dispatch) => {
    dispatch({
        type: AUTH_SUCCESS,
        payload: {email:email, password:password, isLogin},
    })
}