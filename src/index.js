import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatPage, ProfilePage, Page404 } from './pages'
// import { ThemeProvider, createTheme } from '@mui/material';
import { Header } from "./components";
import "./global.css";
import './App.scss';
import './index.css';

// const theme = createTheme({

// });

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
);
