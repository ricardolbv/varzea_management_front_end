import { GET_ALL_PLAYERS, CREATE_PLAYER, EXCLUDE_PLAYER, UPDATE_PLAYER } from "./actions";

export const players = ( state = [], action ) => {
const { type, payload } = action;

switch (type) {
   case GET_ALL_PLAYERS: {
        const { allPlayers } = payload;
        
        return allPlayers;
   }

   case CREATE_PLAYER: {
        const player = [];
        player.push(payload);

        return state.concat(player);
    }

    case EXCLUDE_PLAYER: {
        return state.filter(plr => plr.id !== payload);
    }

    case UPDATE_PLAYER: {
        return state.map(player => {
            if (player.id !== payload.id) {
                return player;
            }
            return {
                ...player,
                payload,
            }
        })
    }

   default:
       return state;
    }
}

