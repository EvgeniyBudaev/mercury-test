import {combineReducers} from 'redux'
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    posts: postsReducer
})

// (globalState: RootStateType) => RootStateType
type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export {rootReducer}
