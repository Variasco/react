import {
    SEND_MESSAGE,
    DELETE_MESSAGE,
    UPDATE_VALUE,
    CLEAR_CHAT,
} from "./types";

export const sendMessage = (roomId, message) => {
    return { type: SEND_MESSAGE, payload: { roomId, message } };
};

export const deleteMessage = (roomId, messageId) => {
    return { type: DELETE_MESSAGE, payload: { roomId, messageId } };
};

export const updateValue = (roomId, value) => {
    return { type: UPDATE_VALUE, payload: { roomId, value } };
};

export const clearChat = (roomId) => {
    return { type: CLEAR_CHAT, payload: roomId };
};
