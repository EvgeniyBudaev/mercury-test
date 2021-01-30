import {arrToMap} from "../utils";
import {FAILURE, LOAD_POSTS, REQUEST, SUCCESS} from "../constants";
import {AppThunk} from "../types";

const initialState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
}

type IStatePosts  = typeof initialState

const postsReducer = (state = initialState, action:any): IStatePosts => {
    console.log('[Reducer][action]', action)
    const {type, response, error} = action

    switch (type) {
        case LOAD_POSTS + REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case LOAD_POSTS + SUCCESS:
            return {
                ...state,
                entities: arrToMap(response),
                loading: false,
                loaded: true,
            }
        case LOAD_POSTS + FAILURE:
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