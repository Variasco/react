import { GET_SESSION, GET_SESSION_ERROR } from "./types";

const initialState = { session: null, error: null };

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SESSION:
            return { ...state, session: action.payload };
        case GET_SESSION_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
