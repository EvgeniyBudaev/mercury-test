import { createAsyncAction } from 'typesafe-actions'
import axios from 'axios'
import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE} from "../constants";
import {AppThunk} from "../types";
import {Dispatch} from "redux";

const fetchPostsAsync = createAsyncAction(
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE
)<void, Array<IResponse>, Error>();

export type IFailure = {
    error: Error
}
type IResponse = {
    id: number,
    userId: number,
    title: string,
    body: string
}
type LoadPostsRequestType = {
    type: typeof LOAD_POSTS_REQUEST
}
type LoadPostsSuccessType = {
    type: typeof LOAD_POSTS_SUCCESS,
    payload: Array<IResponse>
}
type LoadPostsFailureType = {
    type: typeof LOAD_POSTS_FAILURE,
    error: IFailure
}

export type PostsTypes = LoadPostsRequestType | LoadPostsSuccessType | LoadPostsFailureType
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





//
// export type PostsTypes = LoadPostsRequestType | LoadPostsSuccessType | LoadPostsFailureType
// //export const loadPosts = (): ThunkAction<Promise<void>, RootStateType, unknown, PostsTypes> => async (dispatch: Dispatch) => {
// export const loadPosts = ():AppThunk => async (dispatch: Dispatch<PostsTypes>) => {
//     // dispatch({type: LOAD_POSTS_REQUEST})
//     dispatch(fetchPostsAsync.request())
//     try {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4`
//         )
//         // dispatch({type: LOAD_POSTS_SUCCESS, response})
//         dispatch(fetchPostsAsync.success(response.data))
//     } catch (error) {
//         dispatch({type: LOAD_POSTS_FAILURE, error})
//         //dispatch(fetchPostsAsync.failure(error))
//     }
// }