import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import MessagesList from './components/messages-panel/MessagesList';
import MessagePanel from './components/message-panel/MessagePanel';
import MessagesListData from "../src/__mocks__/messageList"

  return (
    <>
      <div id='interface'>
        <Sidebar />
        <MessagesList MessageListData= />
        <MessagePanel />
      </div>
    </>
  );
}

export default App;
