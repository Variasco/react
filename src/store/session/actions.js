import { GET_SESSION, GET_SESSION_ERROR } from "./types";

export const getSession = (data) => ({
    type: GET_SESSION,
    payload: data,
});
export const getSessionError = (error) => ({
    type: GET_SESSION_ERROR,
    payload: error,
});
