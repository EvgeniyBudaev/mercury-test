import {combineReducers} from 'redux'
import postsReducer from "./postsReducer";
import photosReducer from "./photosReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    photos: photosReducer
})

// (globalState: RootStateType) => RootStateType
type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export {rootReducer}
