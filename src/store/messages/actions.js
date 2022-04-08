import {
    GET_MESSAGES_START,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_ERROR,
    SEND_MESSAGE_START,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR,
    DELETE_MESSAGE_START,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_ERROR,
} from "./types";

export const getMessagesStart = () => {
    return { type: GET_MESSAGES_START };
};
export const getMessagesSuccess = (data) => {
    return { type: GET_MESSAGES_SUCCESS, payload: data };
};
export const getMessagesError = (error) => {
    return { type: GET_MESSAGES_ERROR, payload: error };
};

export const sendMessageStart = () => {
    return { type: SEND_MESSAGE_START };
};
export const sendMessageSuccess = () => {
    return { type: SEND_MESSAGE_SUCCESS };
};
export const sendMessageError = (error) => {
    return { type: SEND_MESSAGE_ERROR, payload: error };
};

export const deleteMessageStart = () => {
    return { type: DELETE_MESSAGE_START };
};
export const deleteMessageSuccess = () => {
    return { type: DELETE_MESSAGE_SUCCESS };
};
export const deleteMessageError = (error) => {
    return { type: DELETE_MESSAGE_ERROR, payload: error };
};
