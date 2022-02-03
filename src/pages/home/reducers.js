import { 
    GET_TIME_INFO,
    UPDATE_TIME_INFO,
    LOGOUT,
    LOGIN,
} from "./actions";


export const team = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_TIME_INFO:
            return {state,
                    ...payload};
        
        case GET_TIME_INFO:
            return payload;

        case LOGIN:
            return {state,
                ...payload};

        default:
            return state;
    }
}