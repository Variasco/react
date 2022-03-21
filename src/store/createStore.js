import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { chatsReducer } from "./chats";
import { messagesReducer } from "./messages";
import { profileReducer } from "./profile";
import { catFactsReducer } from "./cat-facts";
import { getCatFactsApi } from "../api";
import { logger } from "./middlewares";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [""],
};

const reduser = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    catFacts: catFactsReducer,
});

export const store = createStore(
    persistReducer(persistConfig, reduser),
    compose(
        applyMiddleware(
            // logger,
            thunk.withExtraArgument({ getCatFactsApi }),
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args,
    ),
);

export const persistor = persistStore(store);
