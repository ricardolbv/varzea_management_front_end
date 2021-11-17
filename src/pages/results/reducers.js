import {
    GET_SUMMARY,
    UPDATE_SUMMARY,
} from "./actions";

export const summary = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_SUMMARY:
            return payload

        case UPDATE_SUMMARY:
            return {
                ...state,
                payload
            }
        
        default:
            return state;
    }
}
