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

const initialState = {
    pendingGet: false,
    pendingSend: false,
    pendingDelete: false,
    errorGet: null,
    errorSend: null,
    errorDelete: null,
    messages: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_START:
            return { ...state, pendingGet: true, errorGet: null };
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                pendingGet: false,
                messages: {
                    ...state.messages,
                    [action.payload.roomId]: action.payload.messages,
                },
            };
        case GET_MESSAGES_ERROR:
            return { ...state, pendingGet: false, errorGet: action.payload };

        case SEND_MESSAGE_START:
            return { ...state, pendingSend: true, errorSend: null };
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                pendingSend: false,
            };
        case SEND_MESSAGE_ERROR:
            return { ...state, pendingSend: false, errorSend: action.payload };

        case DELETE_MESSAGE_START:
            return { ...state, pendingDelete: true };
        case DELETE_MESSAGE_SUCCESS:
            return { ...state, pendingDelete: false };
        case DELETE_MESSAGE_ERROR:
            return {
                ...state,
                pendingDelete: false,
                errorDelete: action.payload,
            };

        default:
            return state;
    }
};
