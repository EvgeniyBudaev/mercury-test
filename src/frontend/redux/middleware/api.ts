import { Middleware } from 'redux'
import axios from 'axios'
import {FAILURE, REQUEST, SUCCESS} from '../constants'
import {RootStateType} from '../reducers'

const api: Middleware<{}, RootStateType> = (store) => (next) => async (action) => {
    if (!action.CallAPI) return next(action)

    const {CallAPI, type, ...rest} = action

    next({...rest, type: type + REQUEST})

    try {
        const response = await axios.get(CallAPI)
        next({...rest, type: type + SUCCESS, response})
    } catch (error) {
        next({...rest, type: type + FAILURE, error})
    }
}

export default api
