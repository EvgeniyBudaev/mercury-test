import {LOAD_POSTS, FAILURE, REQUEST, SUCCESS} from "../constants";


export const loadPosts = () => async (dispatch) => {
    dispatch({type: LOAD_POSTS + REQUEST})
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4`
        ).then((res) => res.json())
        dispatch({type: LOAD_POSTS + SUCCESS, response})
    } catch (error) {
        dispatch({type: LOAD_POSTS + FAILURE, error})
    }
}