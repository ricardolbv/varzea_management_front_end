import {
    GET_SUMMARY,
    UPDATE_SUMMARY,
    GET_PLAYERS_AWAY_TEAM,
    GET_PLAYERS_HOME_TEAM,
    CREATE_GOAL_AWAY,
    CREATE_GOAL_HOME,
    CREATE_CARD_HOME,
    CREATE_CARD_AWAY,
    GET_CARDS_FROM_MATCH_AWAY,
    GET_CARDS_FROM_MATCH_HOME,
    GET_GOALS_FROM_MATCH_HOME,
    GET_GOALS_FROM_MATCH_AWAY,
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

export const goalsHomeSummary = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_GOALS_FROM_MATCH_HOME:
            return payload;

        case CREATE_GOAL_HOME:
            const newGoal = [];
            newGoal.push(payload)

            return state.concat(newGoal);

        default:
            return state;
    }
}

export const goalsAwaySummary = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_GOALS_FROM_MATCH_AWAY:
            return payload;

        case CREATE_GOAL_AWAY:
            const newGoal = [];
            newGoal.push(payload)

            return state.concat(newGoal);

        default:
            return state;
    }
}

export const cardsAwaySummary = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_CARDS_FROM_MATCH_AWAY:
            return payload;

        case CREATE_CARD_AWAY:
            const newCard = [];
            newCard.push(payload)

            return state.concat(newCard);

        default:
            return state;
    }
}

export const cardsHomeSummary = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_CARDS_FROM_MATCH_HOME:
            return payload;

        case CREATE_CARD_HOME:
            const newCard = [];
            newCard.push(payload)

            return state.concat(newCard);

        default:
            return state;
    }
}


