import { ADD_NEW_CHAT, DELETE_CHAT } from "./types";

const InitialState = {
    chats: ["chat1", "chat2", "chat3"],
};

export const chatsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_NEW_CHAT:
            return { ...state, chats: [...state.chats, action.payload] };
        case DELETE_CHAT:
            return {
                ...state,
                chats: state.chats.filter((chat) => chat !== action.payload),
            };
        default:
            return state;
    }
};
