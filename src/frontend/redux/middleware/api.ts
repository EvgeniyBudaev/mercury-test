import { Middleware } from 'redux'
import axios from 'axios'
import {RootStateType} from '../reducers'

const api: Middleware<{}, RootStateType> = (store) => (next) => async (action) => {
    if (!action.CallAPI) return next(action)

    const {CallAPI, type, ...rest} = action

    next({...rest, type: type})

    try {
        const response = await axios.get(CallAPI)
        next({...rest, type: type, response})
    } catch (error) {
        next({...rest, type: type, error})
    }
}

export default api
