import {Action} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './reducers'

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateType,
    unknown,
    Action<string>
    >