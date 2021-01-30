import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE} from "../constants";
import {AppThunk} from "../types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../reducers";

interface IResponse {
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
    response: Array<IResponse> 
}
type LoadPostsFailureType = {
    type: typeof LOAD_POSTS_FAILURE,
    error: string
}

export type ActionTypes = LoadPostsRequestType | LoadPostsSuccessType | LoadPostsFailureType

export const loadPosts = (): ThunkAction<Promise<void>, RootStateType, unknown, ActionTypes> => async (dispatch) => {
    dispatch({type: LOAD_POSTS_REQUEST})
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4`
        ).then((res) => res.json())
        dispatch({type: LOAD_POSTS_SUCCESS, response})
    } catch (error) {
        dispatch({type: LOAD_POSTS_FAILURE, error})
    }
}