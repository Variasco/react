import { getSession, getSessionError } from "./actions";

export const getSessionFromDB = () => async (dispatch, _, api) => {
    try {
        const session = await api.getSessionApi();
        console.log("getSessionFromDB session", session);
        dispatch(getSession(session));
    } catch (e) {
        dispatch(getSessionError(e));
    }
};
