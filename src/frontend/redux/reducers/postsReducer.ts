import {arrToMap} from "../utils";
import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE} from "../constants";
import {PostsTypes, IFailure} from "../actions/action";
import {IPost} from "../types";


interface IPostsEntities {
    [payload: string]: IPost
}
interface IPostsState {
    loading: boolean
    loaded: boolean,
    error:  null | IFailure,
    entities: IPostsEntities
}
const initialState: IPostsState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null as IFailure | null,
}


const postsReducer = (state = initialState, action: PostsTypes): IPostsState => {

    switch (action.type) {
        case LOAD_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case LOAD_POSTS_SUCCESS:
            return {
                ...state,
                entities: arrToMap(action.payload),
                loading: false,
                loaded: true,
            }
        case LOAD_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error,
            }
        default:
            return state
    }
}

export default postsReducer