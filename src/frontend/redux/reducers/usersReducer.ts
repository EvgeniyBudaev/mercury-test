import { arrToMap } from "../utils";
import { LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE } from "../constants";
import { IFailure, IUser } from "../types";
import {LoadUsersTypes} from "../actions/action";


interface IUsersEntities {
    [payload: string]: IUser
}
interface IUsersState {
    loading: boolean
    loaded: boolean,
        error:  null | IFailure,
        entities: IUsersEntities
}
const initialState: IUsersState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null as IFailure | null,
}


const usersReducer = (state: IUsersState = initialState, action: LoadUsersTypes): IUsersState => {

    switch (action.type) {
        case LOAD_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                entities: arrToMap(action.payload.response.data),
                loading: false,
                loaded: true,
            }
        case LOAD_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: null,
            }
        default:
            return state
    }
}

export default usersReducer