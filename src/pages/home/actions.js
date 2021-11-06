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

export const LOGOUT = "LOGOUT";
export const logout = info => ({
    type: LOGOUT,
    payload: info,
})

export const LOGIN = "LOGIN";
export const login = time => ({
    type: LOGIN,
    payload: time
})
