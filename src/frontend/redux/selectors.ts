import {createSelector} from 'reselect'
import {RootStateType} from "./reducers";
import {IPhoto, IPost, IPostId} from "./types";


export const postsSelector = (state: RootStateType) => state.posts.entities
export const photosSelector = (state: RootStateType) => state.photos.entities

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


export const postSelector = (state: RootStateType, props: IPostId): IPost => state.posts.entities[props.postId]
export const photoSelector = (state: RootStateType, props: IPostId): IPhoto => state.photos.entities[props.postId]

