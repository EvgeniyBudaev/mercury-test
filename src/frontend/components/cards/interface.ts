import { IPhoto, IPost, IUser } from "../../redux/types";


export type MapStatePropsPostsType = {
    posts: Array<IPost>,
    photos: Array<IPhoto>,
    users: Array<IUser>,
    loadingPosts: boolean,
    loadedPosts: boolean,
    loadingPhotos: boolean,
    loadedPhotos: boolean,
    loadingUsers: boolean,
    loadedUsers: boolean,
}

type MapDispatchPropsPostsType = {
    loadPosts: () => void,
    loadPhotos: () => void,
    loadUsers: () => void
}

export type CardsPopsType = MapStatePropsPostsType & MapDispatchPropsPostsType