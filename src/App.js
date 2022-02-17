import './App.scss';
import Message from './components/Message';
import { useState, useEffect } from "react";

// import Example from './components/Examples';

function App() {

  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === 'Ivan') {
      setTimeout(() => {
        setMessageList([...messageList, {
          text: 'Something in bot\'s language',
          author: 'Bot'
        }]);
      }, 1500);
    }
  }, [messageList]);

  const clickHandler = (e) => {
    e.preventDefault();

    setMessageList([...messageList, {
      text: value,
      author: 'Ivan'
    }]);

    setValue('');
  }

  const inputHandler = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className='App'>
      <h2>Here are some messages</h2>
      <div className='message-list'>
        {messageList.map((item, index) => {
          return (
            <Message key={index} item={item} />
            // использовать индекс в качестве ключа не совсем правильно, но подключать генератор уникальных ключей лень.
          );
        })}
      </div>
      <form className='message-list__form' action=''>
        <input
          className='message-list__input'
          type="text"
          onChange={inputHandler}
          value={value}
        ></input>
        <button
          className='message-list__send'
          type='submit'
          onClick={clickHandler}
        >Send</button>
      </form>
    </div>
  );
}

export default App;