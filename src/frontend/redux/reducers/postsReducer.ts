import {arrToMap} from "../utils";
import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE} from "../constants";
import {AppThunk} from "../types";
import {ActionTypes} from "../actions/action";

const initialState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
}

type IStatePosts  = typeof initialState

const postsReducer = (state = initialState, action: ActionTypes): IStatePosts => {
    console.log('[Reducer][action]', action)
    const {type, response, error} = action

    switch (type) {
        case LOAD_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case LOAD_POSTS_SUCCESS:
            return {
                ...state,
                entities: arrToMap(response),
                loading: false,
                loaded: true,
            }
        case LOAD_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error,
            }
        default:
            return state
    }
}

export default postsReducer