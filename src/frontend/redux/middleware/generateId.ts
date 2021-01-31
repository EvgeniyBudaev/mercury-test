import {v4 as uuid} from 'uuid'
import { Middleware } from 'redux'
import {RootStateType} from '../reducers'
import {IPostsById} from "../types";


const generateId: Middleware<{}, RootStateType> = (store) => (next) => (action) => {
     if (!action.generateId) return next(action)

    const {generateId, ...rest} = action
    next({
        ...rest,
        ...generateId.reduce((acc: Array<IPostsById>, key: string) => ({...acc, [key]: uuid()}), {}),
    })
}

export default generateId
