import { 
    CREATE_CAPTAIN,
    GET_CAPTAIN,
} from "./actions";

export const captain = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_CAPTAIN:
            return {state,
                    ...payload};
        
        case GET_CAPTAIN:
            return state;

        default:
            return state;
    }
}