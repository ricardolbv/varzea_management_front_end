import {
    GET_SUMMARY,
    UPDATE_SUMMARY,
    GET_PLAYERS_AWAY_TEAM,
    GET_PLAYERS_HOME_TEAM,
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

export const awayPlayers = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PLAYERS_AWAY_TEAM:
            return payload;

        default:
            return state;
    }
}

export const homePlayers = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PLAYERS_HOME_TEAM:
            return payload;

        default:
            return state;
    }
}
