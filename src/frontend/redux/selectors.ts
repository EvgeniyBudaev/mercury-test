import {createSelector} from 'reselect'
import {RootStateType} from "./reducers";

const postsSelector = (state: RootStateType) => state.posts.entities
const photosSelector = (state: RootStateType) => state.photos.entities

export const postsLoadingSelector = (state: RootStateType) =>
    state.posts.loading
export const postsLoadedSelector = (state: RootStateType) =>
    state.posts.loaded

export const photosLoadingSelector = (state: RootStateType) =>
    state.photos.loading
export const photosLoadedSelector = (state: RootStateType) =>
    state.photos.loaded

export const postsListSelector = createSelector(
    postsSelector,
    Object.values
)

export const photosListSelector = createSelector(
    photosSelector,
    Object.values
)