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

const initialState = {
    chats: [],
    pendingGet: false,
    pendingCreate: false,
    pendingDelete: false,
    pendingValue: false,
    errorGet: null,
    errorCreate: null,
    errorDelete: null,
    errorValue: null,
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS_START:
            return { ...state, pendingGet: true, errorGet: null };
        case GET_CHATS_SUCCESS:
            return { ...state, pendingGet: false, chats: action.payload };
        case GET_CHATS_ERROR:
            return { ...state, pendingGet: false, errorGet: action.payload };

        case CREATE_CHAT_START:
            return { ...state, pendingCreate: true, errorCreate: null };
        case CREATE_CHAT_SUCCESS:
            return { ...state, pendingCreate: false };
        case CREATE_CHAT_ERROR:
            return {
                ...state,
                pendingCreate: false,
                errorCreate: action.payload,
            };

        case DELETE_CHAT_START:
            return { ...state, pendingDelete: true, errorDelete: null };
        case DELETE_CHAT_SUCCESS:
            return { ...state, pendingDelete: false };
        case DELETE_CHAT_ERROR:
            return {
                ...state,
                pendingDelete: false,
                errorDelete: action.payload,
            };

        case UPDATE_VALUE_START:
            return { ...state, pendingValue: true, errorValue: null };
        case UPDATE_VALUE_SUCCESS:
            return { ...state, pendingValue: false };
        case UPDATE_VALUE_ERROR:
            return {
                ...state,
                pendingValue: false,
                errorValue: action.payload,
            };

        default:
            return state;
    }
};
