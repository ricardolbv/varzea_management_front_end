export const GET_TIME_INFO = "GET_TIME_INFO";
export const getTime = time => ({
    type: GET_TIME_INFO,
    payload: time
})

export const UPDATE_TIME_INFO = "UPDATE_TIME_INFO";
export const updateTime = time => ({
    type: UPDATE_TIME_INFO,
    payload: time
})