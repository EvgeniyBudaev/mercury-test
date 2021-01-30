import {Action} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './reducers'
import {LOAD_POSTS} from "./constants";


type ResponseActionType = {
    type: typeof LOAD_POSTS,
    response: Array<object>
}


export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateType,
    unknown,
    Action<ResponseActionType>
    >

