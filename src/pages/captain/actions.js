export const CREATE_CAPTAIN = 'CREATE_CAPTAIN';
export const createCaptain = captain => ({
    type: CREATE_CAPTAIN,
    payload: captain
})

export const GET_CAPTAIN = 'GET_CAPTAIN'
export const getCaptain = captain => ({
    type: GET_CAPTAIN,
    payload: captain,
})