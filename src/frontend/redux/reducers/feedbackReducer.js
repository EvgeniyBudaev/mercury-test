import {ADD_FEEDBACK} from "../constants";

const initialState = {
    entities: {}
}

const feedbackReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FEEDBACK:
            return {
                ...state,
                entities: action.payload
            }
        default:
            return state
    }
}

export default feedbackReducer