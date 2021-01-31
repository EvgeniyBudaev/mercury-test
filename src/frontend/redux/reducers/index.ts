import {combineReducers} from 'redux'
import postsReducer from "./postsReducer";
import photosReducer from "./photosReducer";
import feedbackReducer from "./feedbackReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    photos: photosReducer,
    feedback: feedbackReducer
})

// (globalState: RootStateType) => RootStateType
type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export {rootReducer}
