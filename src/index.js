import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage, ProfilePage, Page404 } from "./pages";
// import { ThemeProvider, createTheme } from '@mui/material';
import { Header } from "./components";
import { store } from "./store";
import "./global.css";
import "./App.scss";
import "./index.css";

// const theme = createTheme({

// });

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <ThemeProvider theme={theme}> */}
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<h1>Home page</h1>} />
					<Route path="/chats/*" element={<ChatPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
			{/* </ThemeProvider> */}
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
