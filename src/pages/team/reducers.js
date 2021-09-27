import { GET_ALL_PLAYERS, CREATE_PLAYER } from "./actions";

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

   default:
       return state;
    }
}

