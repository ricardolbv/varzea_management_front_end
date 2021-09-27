import { GET_ALL_PLAYERS } from "./actions";

export const players = ( state = [], action ) => {
const { type, payload } = action;

switch (type) {
   case GET_ALL_PLAYERS: {
        const { allPlayers } = payload;
        return allPlayers;
   }

   default:
       return state;
    }
}

