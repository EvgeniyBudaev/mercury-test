import {Action} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './reducers'
import {
    LOAD_PHOTOS_FAILURE,
    LOAD_PHOTOS_REQUEST,
    LOAD_PHOTOS_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS
} from "./constants";

export type PostsThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateType,
    unknown,
    Action<PostsTypes>
    >

export type PhotosThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateType,
    unknown,
    Action<PhotosTypes>
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

export interface IPhoto {
    id: number,
    albumId: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface IPhotosById {
    [key: string]: IPhoto
}

export interface IPostsResponse {
    id: number,
    userId: number,
    title: string,
    body: string
}

export interface IPhotosResponse {
    id: number,
    albumId: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export type IFailure = {
    error: Error
}

export type LoadPostsRequestType = {
    type: typeof LOAD_POSTS_REQUEST
}

export type LoadPostsSuccessType = {
    type: typeof LOAD_POSTS_SUCCESS,
    payload: Array<IPostsResponse>
}

export type LoadPostsFailureType = {
    type: typeof LOAD_POSTS_FAILURE,
    error: IFailure
}

export type LoadPhotosRequestType = {
    type: typeof LOAD_PHOTOS_REQUEST
}

export type LoadPhotosSuccessType = {
    type: typeof LOAD_PHOTOS_SUCCESS,
    payload: Array<IPhotosResponse>
}

export type LoadPhotosFailureType = {
    type: typeof LOAD_PHOTOS_FAILURE,
    error: IFailure
}

export type PostsTypes = LoadPostsRequestType | LoadPostsSuccessType | LoadPostsFailureType


export type PhotosTypes = LoadPhotosRequestType | LoadPhotosSuccessType | LoadPhotosFailureType
