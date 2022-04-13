import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { chatsReducer } from "./chats";
import { messagesReducer } from "./messages";
import { profileReducer } from "./profile";
import { catFactsReducer } from "./cat-facts";
import { sessionReducer } from "./session";
import {
    getCatFactsApi,
    createChatApi,
    getChatsApi,
    getMessagesApi,
    sendMessageApi,
    getSessionApi,
    deleteChatApi,
    deleteMessageApi,
    updateValueApi,
} from "../api";
// import { logger } from "./middlewares";

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer,
        catFacts: catFactsReducer,
        session: sessionReducer,
    }),
    compose(
        applyMiddleware(
            // logger,
            thunk.withExtraArgument({
                getCatFactsApi,
                createChatApi,
                getChatsApi,
                getMessagesApi,
                sendMessageApi,
                getSessionApi,
                deleteChatApi,
                deleteMessageApi,
                updateValueApi,
            }),
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args,
    ),
);
