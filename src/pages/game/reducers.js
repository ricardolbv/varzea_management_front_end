import { 
    GET_POSSIBLE_TEAMS,
} from "./actions";

export const opponents = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_POSSIBLE_TEAMS:
            return payload;

        default:
            return state;
    }
}