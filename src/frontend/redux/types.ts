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

export interface IPost {
    id: number,
    userId: number,
    title: string,
    body: string
}

export interface IPostsById {
    [key: string]: IPost
}

