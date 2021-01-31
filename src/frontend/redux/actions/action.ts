import { createAsyncAction } from 'typesafe-actions'
import axios from 'axios'
import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_PHOTOS_REQUEST,
    LOAD_PHOTOS_SUCCESS,
    LOAD_PHOTOS_FAILURE
} from "../constants";
import {PostsThunk, IPostsResponse, PostsTypes, PhotosTypes, IPhotosResponse, PhotosThunk} from "../types";
import {Dispatch} from "redux";



const fetchPostsAsync = createAsyncAction(
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE
)<void, Array<IPostsResponse>, Error>();

export const loadPosts = ():PostsThunk => async (dispatch: Dispatch<PostsTypes>) => {
    dispatch(fetchPostsAsync.request())
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4`
        )
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


