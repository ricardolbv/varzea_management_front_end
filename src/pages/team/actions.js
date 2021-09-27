export const GET_ALL_PLAYERS = 'GET_ALL_PLAYERS';
export const getAllPlayers = allPlayers => ({
    type: GET_ALL_PLAYERS,
    payload: { allPlayers },
})

export const CREATE_PLAYER = 'CREATE_PLAYER';
export const createPlayer = newPlayer => ({
    type: CREATE_PLAYER,
    payload: newPlayer
})