import {combineReducers} from 'redux'
import postsReducer from "./postsReducer";

const rootReducer = () => combineReducers({
    postsReducer
})

// (globalState: RootStateType) => RootStateType
type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export {rootReducer}
