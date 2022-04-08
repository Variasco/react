import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    ChatPage,
    ProfilePage,
    Page404,
    CatFactsPage,
    SignInPage,
    SignUpPage,
} from "./pages";
import { ThemeProvider, createTheme } from "@mui/material";
import { Header, PublicRoute, PrivateRoute } from "./components";
import { getSessionFromDB, sessionSelector, store } from "./store";
import "./global.css";
import "./App.scss";
import "./index.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./api";

const theme = createTheme({
    palette: {
        primary: {
            main: "#5e35b1",
        },
        secondary: {
            main: "#304ffe",
        },
    },
});

const App = () => {
    const [session, setSession] = useState(null);
    // const dispatch = useDispatch();
    // const session = useSelector(sessionSelector());      // Подробнее в src/api/session.js

    useEffect(() => {
        /*  Функция onAuthStateChanged срабатывает с задержкой. Если обновить страницу,
            в которой необходима авторизация, то произойдет редирект на "/", так как
            user прилетает не сразу, такой вот баг
        */
        onAuthStateChanged(getAuth(firebaseApp), (user) => {
            if (user) {
                setSession(user);
            } else {
                setSession(null);
            }
        });
    }, []);

    const isAuth = !!session;

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header isAuth={isAuth} />
                <Routes>
                    <Route path="/" element={<h1>Home page</h1>} />
                    <Route
                        path="/chats/*"
                        element={
                            <PrivateRoute isAuth={isAuth}>
                                <ChatPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute isAuth={isAuth}>
                                <ProfilePage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/cat-facts"
                        element={
                            <PrivateRoute isAuth={isAuth}>
                                <CatFactsPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/sign-in"
                        element={
                            <PublicRoute isAuth={isAuth}>
                                <SignInPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/sign-up"
                        element={
                            <PublicRoute isAuth={isAuth}>
                                <SignUpPage />
                            </PublicRoute>
                        }
                    />
                    <Route path="/*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
