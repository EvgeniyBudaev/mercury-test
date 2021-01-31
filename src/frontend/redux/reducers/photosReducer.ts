import {arrToMap} from "../utils";
import {IFailure, IPhoto, PhotosTypes} from "../types";
import {LOAD_PHOTOS_SUCCESS, LOAD_PHOTOS_REQUEST, LOAD_PHOTOS_FAILURE} from "../constants";


interface IPhotosEntities {
    [payload: string]: IPhoto
}

interface IPhotosState {
    loading: boolean
    loaded: boolean,
    error:  null | IFailure,
    entities: IPhotosEntities
}

const initialState: IPhotosState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null as IFailure | null,
}

const photosReducer = (state = initialState, action: PhotosTypes): IPhotosState => {

    switch (action.type) {
        case LOAD_PHOTOS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case LOAD_PHOTOS_SUCCESS:
            return {
                ...state,
                entities: arrToMap(action.payload),
                loading: false,
                loaded: true,
            }
        case LOAD_PHOTOS_FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error,
            }
        default:
            return state
    }
}

export default photosReducer