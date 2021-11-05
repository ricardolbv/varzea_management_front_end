import {
    GET_SUMMARY
} from "./actions";

export const summary = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_SUMMARY:
            return payload

        default:
            return state;
    }
}