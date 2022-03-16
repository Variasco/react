import { ADD_NEW_CHAT, DELETE_CHAT } from "./types";

export const addNewChat = (name) => {
    return { type: ADD_NEW_CHAT, payload: name };
};

export const deleteChat = (name) => {
    return { type: DELETE_CHAT, payload: name };
};
