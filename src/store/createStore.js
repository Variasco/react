import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./chats";
import { messagesReducer } from "./messages";
import { profileReducer } from "./profile";

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer,
    }),
);
