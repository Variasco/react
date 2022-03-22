import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage, ProfilePage, Page404 } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components";
import { store, persistor } from "./store";
import "./global.css";
import "./App.scss";
import "./index.css";

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

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<h1>Home page</h1>} />
                            <Route path="/chats/*" element={<ChatPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/*" element={<Page404 />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
