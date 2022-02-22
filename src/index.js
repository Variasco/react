import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { MessageList } from './components/MessageList';
import { ChatsList } from './components/ChatsList';

const theme = createTheme({

});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <ChatsList />
        <MessageList />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
