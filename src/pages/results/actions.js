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
