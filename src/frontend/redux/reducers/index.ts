import {combineReducers} from 'redux'
import postsReducer from "./postsReducer";
import photosReducer from "./photosReducer";
import feedbackReducer from "./feedbackReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    photos: photosReducer,
    feedback: feedbackReducer,
    auth: authReducer
})

// (globalState: RootStateType) => RootStateType
type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export {rootReducer}
