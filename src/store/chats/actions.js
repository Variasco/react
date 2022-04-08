import {
    GET_CHATS_START,
    GET_CHATS_SUCCESS,
    GET_CHATS_ERROR,
    CREATE_CHAT_START,
    CREATE_CHAT_SUCCESS,
    CREATE_CHAT_ERROR,
    DELETE_CHAT_START,
    DELETE_CHAT_SUCCESS,
    DELETE_CHAT_ERROR,
    UPDATE_VALUE_START,
    UPDATE_VALUE_SUCCESS,
    UPDATE_VALUE_ERROR,
} from "./types";

export const getChatsStart = () => {
    return { type: GET_CHATS_START };
};
export const getChatsSuccess = (chats) => {
    return { type: GET_CHATS_SUCCESS, payload: chats };
};
export const getChatsError = (error) => {
    return { type: GET_CHATS_ERROR, payload: error };
};

export const createChatsStart = () => {
    return { type: CREATE_CHAT_START };
};
export const createChatsSuccess = () => {
    return { type: CREATE_CHAT_SUCCESS };
};
export const createChatsError = (error) => {
    return { type: CREATE_CHAT_ERROR, payload: error };
};

export const deleteChatsStart = () => {
    return { type: DELETE_CHAT_START };
};
export const deleteChatsSuccess = () => {
    return { type: DELETE_CHAT_SUCCESS };
};
export const deleteChatsError = (error) => {
    return { type: DELETE_CHAT_ERROR, payload: error };
};

export const updateValueStart = () => {
    return { type: UPDATE_VALUE_START };
};
export const updateValueSuccess = () => {
    return { type: UPDATE_VALUE_SUCCESS };
};
export const updateValueError = (error) => {
    return { type: UPDATE_VALUE_ERROR, payload: error };
};
