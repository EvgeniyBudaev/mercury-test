import {Action} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './reducers'
import {PostsTypes} from "./actions/action";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateType,
    unknown,
    Action<PostsTypes>
    >



