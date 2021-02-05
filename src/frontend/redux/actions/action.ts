import { createAsyncAction } from 'typesafe-actions'
import axios from 'axios'
import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_PHOTOS_REQUEST,
    LOAD_PHOTOS_SUCCESS,
    LOAD_PHOTOS_FAILURE,
    ADD_FEEDBACK,
    LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE,
} from "../constants";
import {PostsThunk, IPostsResponse, PostsTypes, PhotosTypes, IPhotosResponse, PhotosThunk, IUser, IFailure} from "../types";
import {Dispatch} from "redux";




const fetchPostsAsync = createAsyncAction(
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
)<void, Array<IPostsResponse>, Error>();

export const loadPosts = ():PostsThunk => async (dispatch: Dispatch<PostsTypes>) => {
    dispatch(fetchPostsAsync.request())
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4`
        )

        //dispatch({type: LOAD_POSTS_FAILURE, response.data, generateId: ['posts']})
         dispatch(fetchPostsAsync.success(response.data))
    } catch (error) {
        dispatch({type: LOAD_POSTS_FAILURE, error})
    }
}



const fetchPhotosAsync = createAsyncAction(
    LOAD_PHOTOS_REQUEST,
    LOAD_PHOTOS_SUCCESS,
    LOAD_PHOTOS_FAILURE
)<void, Array<IPhotosResponse>, Error>();

export const loadPhotos = ():PhotosThunk => async (dispatch: Dispatch<PhotosTypes>) => {
    dispatch(fetchPhotosAsync.request())
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4`
        )
        dispatch(fetchPhotosAsync.success(response.data))
    } catch (error) {
        dispatch({type: LOAD_PHOTOS_FAILURE, error})
    }
}



interface IFeedback {
    name: string,
    text: string,
    phone: string,
}
interface IAddFeedbackPayload {
    feedback: IFeedback,
}
export interface IAddFeedback {
    type: typeof ADD_FEEDBACK,
    payload: IAddFeedbackPayload,
}
export const addFeedback = (feedback: IFeedback):IAddFeedback => ({
    type: ADD_FEEDBACK,
    payload: {feedback}
})




type LoadUsersRequestType = {
    type: typeof LOAD_USERS_REQUEST,
    CallAPI: string
}

interface IData {
    data: Array<IUser>
}

interface IResponse {
    response: IData
}

type LoadUsersSuccessType = {
    type: typeof LOAD_USERS_SUCCESS,
    CallAPI: string,
    payload: IResponse
}

interface IError {
    error: Array<IFailure>
}

type LoadUsersFailureType = {
    type: typeof LOAD_USERS_FAILURE,
    CallAPI: string,
    payload: IError
}

export type LoadUsersTypes = LoadUsersRequestType | LoadUsersSuccessType | LoadUsersFailureType

export const loadUsers = (): LoadUsersTypes => ({
    type: LOAD_USERS_REQUEST,
    CallAPI: 'https://jsonplaceholder.typicode.com/users/',
})






