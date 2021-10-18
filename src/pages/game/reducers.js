import { 
    GET_POSSIBLE_TEAMS,
    POST_GAME,
    GET_GAMES,
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

export const games = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case POST_GAME:
            const newGame = [];
            newGame.push(payload);

            return state.concat(newGame)

        case GET_GAMES:
            const { allGames } = payload;

            return allGames;
        
        default:
            return state
    }
}