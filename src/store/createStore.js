import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { chatsReducer } from "./chats";
import { messagesReducer } from "./messages";
import { profileReducer } from "./profile";
import { logger, botAnswer } from "./middlewares";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["profile"],
};

const reduser = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

export const store = createStore(
    persistReducer(persistConfig, reduser),
    compose(
        applyMiddleware(
            // logger,
            // botAnswer,   // Реализован через thunk в /src/store/messages/thunks.js
            thunk,
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args,
    ),
);

export const persistor = persistStore(store);
