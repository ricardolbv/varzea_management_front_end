export const GET_POSSIBLE_TEAMS = 'GET_POSSIBLE_TEAMS';
export const getPossibleTeams = teams => ({
    type: GET_POSSIBLE_TEAMS,
    payload: teams
})

export const POST_GAME = 'POST_GAME';
export const postGame = game => ({
    type: POST_GAME,
    payload: game
})

export const GET_GAMES = 'GET_GAMES';
export const getGames = allGames => ({
    type: GET_GAMES,
    payload: { allGames }
})