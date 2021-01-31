import {IPhoto, IPost, IPostId} from "../../../redux/types";

export interface ICard {
    post: IPost,
    photo: IPhoto,
    postId: IPostId | number
}

