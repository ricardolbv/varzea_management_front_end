export const GET_ALL_PLAYERS = 'GET_ALL_PLAYERS';
export const getAllPlayers = allPlayers => ({
    type: GET_ALL_PLAYERS,
    payload: { allPlayers },
})