import {createSelector} from 'reselect'
import {RootStateType} from "./reducers";

const postsSelector = (state: RootStateType) => state.posts.entities

export const postsLoadingSelector = (state: RootStateType) =>
    state.posts.loading
export const postsLoadedSelector = (state: RootStateType) =>
    state.posts.loaded

export const postsListSelector = createSelector(
    postsSelector,
    Object.values
)