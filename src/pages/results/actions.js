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

export const CREATE_GOAL_AWAY = 'CREATE_GOAL_AWAY';
export const createGoalAway = goal => ({
    type: CREATE_GOAL_AWAY,
    payload: goal
})

export const CREATE_GOAL_HOME = 'CREATE_GOAL_HOME';
export const createGoalHome = goal => ({
    type: CREATE_GOAL_HOME,
    payload: goal
})

export const CREATE_CARD_HOME = 'CREATE_CARD_HOME';
export const createCardHome = card => ({
    type: CREATE_CARD_HOME ,
    payload: card
})

export const CREATE_CARD_AWAY = 'CREATE_CARD_AWAY';
export const createCardAway = card => ({
    type: CREATE_CARD_AWAY ,
    payload: card
})

export const GET_GOALS_FROM_MATCH_HOME = 'GET_GOALS_FROM_MATCH_HOME';
export const getGoalsFromMatchHome = goals => ({
    type: GET_GOALS_FROM_MATCH_HOME ,
    payload: goals
})

export const GET_GOALS_FROM_MATCH_AWAY = 'GET_GOALS_FROM_MATCH_AWAY';
export const getGoalsFromMatchAway = goals => ({
    type: GET_GOALS_FROM_MATCH_AWAY ,
    payload: goals
})