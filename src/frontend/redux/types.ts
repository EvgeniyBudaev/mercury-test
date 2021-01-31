import {Action} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './reducers'
import {LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS} from "./constants";

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

export interface IResponse {
    id: number,
    userId: number,
    title: string,
    body: string
}

export type IFailure = {
    error: Error
}

export type LoadPostsRequestType = {
    type: typeof LOAD_POSTS_REQUEST
}

export type LoadPostsSuccessType = {
    type: typeof LOAD_POSTS_SUCCESS,
    payload: Array<IResponse>
}

export type LoadPostsFailureType = {
    type: typeof LOAD_POSTS_FAILURE,
    error: IFailure
}

export type PostsTypes = LoadPostsRequestType | LoadPostsSuccessType | LoadPostsFailureType
