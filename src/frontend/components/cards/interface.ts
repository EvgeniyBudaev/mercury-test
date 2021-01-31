import {IPhoto, IPost, IPostsById} from "../../redux/types";


export type MapStatePropsPostsType = {
    posts: Array<IPost>,
    photos: Array<IPhoto>,
    loadingPosts: boolean,
    loadedPosts: boolean,
    loadingPhotos: boolean,
    loadedPhotos: boolean,
}

type MapDispatchPropsPostsType = {
    loadPosts: () => void,
    loadPhotos: () => void,
}

export type CardsPopsType = MapStatePropsPostsType & MapDispatchPropsPostsType