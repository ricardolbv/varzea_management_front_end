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

export const EXCLUDE_PLAYER = 'EXCLUDE_PLAYER';
export const excludePlayer = playerId => ({
    type: EXCLUDE_PLAYER,
    payload: playerId
})

export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const updatePlayer = player => ({
    type: UPDATE_PLAYER,
    payload: player,
})