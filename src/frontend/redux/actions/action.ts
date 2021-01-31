import { createAsyncAction } from 'typesafe-actions'
import axios from 'axios'
import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE} from "../constants";
import {AppThunk, IResponse, PostsTypes} from "../types";
import {Dispatch} from "redux";

const fetchPostsAsync = createAsyncAction(
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE
)<void, Array<IResponse>, Error>();


export const loadPosts = ():AppThunk => async (dispatch: Dispatch<PostsTypes>) => {
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





