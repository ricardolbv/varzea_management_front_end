export const GET_SUMMARY = 'GET_SUMMARY';
export const getSummary = summary => ({
    type: GET_SUMMARY,
    payload: summary
})

export const UPDATE_SUMMARY = 'UPDATE_SUMARY';
export const updateSummary = summary => ({
    type: UPDATE_SUMMARY,
    payload: summary
})

export const GET_PLAYERS_HOME_TEAM = 'GET_PLAYERS_HOME_TEAM';
export const getPlayersHome = players => ({
    type: GET_PLAYERS_HOME_TEAM,
    payload: players
})

export const GET_PLAYERS_AWAY_TEAM = 'GET_PLAYERS_AWAY_TEAM';
export const getPlayersAway = players => ({
    type: GET_PLAYERS_AWAY_TEAM,
    payload: players
})
